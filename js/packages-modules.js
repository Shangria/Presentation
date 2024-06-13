import {store} from "./data-store.js";
import {
    calculateTotalCost, changePackageSelect,
    determineDefaultState,
    dropdownTogglePanel,
    findSegmentById,
    getAvailableServices,
    getServicesFromSelectedSegments, openModalModule, resetForm,
    showModulePanel,
} from "./helpers.js";
import {licencesSelect, optionsPackageSelect} from "./request-invoice.js";
import {validateForm} from "./validation-form.js";

let stepFormState = {
    // page 1
    selectedSegmentNames: [],

    // page 2
    suggestedServices: [],
    availableServices: [],
    defaultService: '',


    //page3
    isChangedDefaultState: false,
    currentPackageSelected: '',
    currentLicencesSelected: '',
    regionsArr: [],
    totalCost: 0,


    // page 4
    userDetails: {
        fistName: '',
    }
};

function buildSubscriptionModulesPanel(){
    const checkedServices = [];

    stepFormState.suggestedServices.forEach(service => {
        if (service.checked) {
            checkedServices.push(service);
        }
    });

    stepFormState.availableServices.forEach(service => {
        if (service.checked) {
            checkedServices.push(service);
        }
    });

    let subscriptionModulesPanelHtml = '';

    for (const service of checkedServices) {
        let tabsHtml = "";
        // Iterate over serviceTabs and concatenate their titles
        service.serviceTabs.forEach(item => {
            tabsHtml += `
                            <li class="dropdown-item">${item.title}</li>
                      `;
        });

        subscriptionModulesPanelHtml += `
                                <div data-package-modal-close class="package-modal-close lg:hidden">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_1_1170)">
                                                                    <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                    <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_1_1170">
                                                                        <rect width="24" height="24" fill="currentColor"></rect>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                     <div class="dropdown-box closing" data-tab-item="${service.name}">
                                          <div class="toggle-container">
                                                <button class="dropdown-toggle">
                                                <div class="module-info flex w-full items-center justify-start">
                                                            <img src="${service.iconImg}" alt="${service.name}">
                                                            <span>${service.name}</span>
                                                        </div>
                                                        <label class="custom-checkbox-label pointer-events-none checkbox-label-toggle">
                                                             <span class="module-price">$${service.price.toFixed(2)}</span>
                                                              <span class="checkmark"></span>
                                                            </label>
                                                </button>
                                                <div class="dropdown-toggle-arrow">
                                                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_332_23416)">
                                                          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </g>
                                                        <defs>
                                                          <clipPath id="clip0_332_23416">
                                                            <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)"></rect>
                                                          </clipPath>
                                                        </defs>
                                                      </svg>
                                                </div>
                                          </div>
                                          <ul class="dropdown-menu">
                                          ${tabsHtml}
                                          </ul>
                                    </div> `;
    }

    $('#currentBoxModules').html(subscriptionModulesPanelHtml);
    $('#subscriptionTotalMobileTitle').text(stepFormState.currentPackageSelected);
    $('#subscriptionModulesTitle').text(stepFormState.currentPackageSelected);
    dropdownTogglePanel("currentBoxModules");
    showModulePanel("Research Package","", "currentBoxModules", );

}

function buildLeftPanel(accordionPanelId, presentationMenuId, isAddedCheckboxes, slideId) {
    let selectedSegments = [];

    for (let segmentName of stepFormState.selectedSegmentNames) {
        let segment = findSegmentById(store.targetSegments, segmentName);
        if (segment) {
            selectedSegments.push(segment);
        }
    }


    if (!stepFormState.isChangedDefaultState) {
        let suggestedServices;
        suggestedServices = getServicesFromSelectedSegments(selectedSegments, store.allServices, stepFormState.currentPackageSelected);
        stepFormState.suggestedServices = suggestedServices;
        stepFormState.availableServices = getAvailableServices(store.allServices, suggestedServices, stepFormState.currentPackageSelected);
    }

    stepFormState.defaultService = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);


    let suggestedModuleItemsHtml = '';
    for (const module of stepFormState.suggestedServices) {
        const elemClass = 'presentation-modules-item ' + ' flex items-center w-full justify-start';

        if (isAddedCheckboxes) {
            suggestedModuleItemsHtml += `
                                                <div class="${elemClass} justify-between">
                                                        <div class="module-info flex w-full items-center justify-start" data-mobile-modal-open data-tab-modules-item="${module.name}">
                                                            <img src="${module.iconImg}" alt="${module.name}">
                                                            <span>${module.name}</span>
                                                        </div>
                                                        <label class="custom-checkbox-label ${module.name === "Research Package" && "pointer-events-none"} ${module.checked && "checkbox-label-toggle"}" data-checkbox-label-id="${module.name}">
                                                             <span class="module-price">$${module.price.toFixed(2)}</span>
                                                              <span class="checkmark"></span>
                                                            </label>
                                                    </div>
                                            `;
        } else {

            suggestedModuleItemsHtml += `
                                            <div class="${elemClass}" data-mobile-modal-open data-tab-modules-item="${module.name}">
                                              <img src="${module.iconImg}" alt="${module.name}">
                                              <span>${module.name}</span>
                                            </div>
                                            `;
        }

    }


    let otherAvailableModuleItemsHtml = '';
    for (const module of stepFormState.availableServices) {
        const elemClass = 'presentation-modules-item ' + ' flex items-center ';
        if (isAddedCheckboxes) {
            otherAvailableModuleItemsHtml += `
                                            <div class="${elemClass} justify-between">
                                                        <div class="module-info flex w-full items-center justify-start" data-mobile-modal-open data-tab-modules-item="${module.name}">
                                                            <img src="${module.iconImg}" alt="${module.name}">
                                                            <span>${module.name}</span>
                                                        </div>
                                                        <label class="custom-checkbox-label ${module.checked && "checkbox-label-toggle"}" data-checkbox-label-id="${module.name}">
                                                             <span class="module-price">$${module.price.toFixed(2)}</span>
                                                              <span class="checkmark"></span>
                                                            </label>
                                                    </div>
                                            `;
        } else {
            otherAvailableModuleItemsHtml += `
                                            <div class="presentation-modules-item flex items-center w-full justify-start" data-mobile-modal-open data-tab-modules-item="${module.name}">
                                              <img src="${module.iconImg}" alt="${module.name}">
                                              <span>${module.name}</span>
                                            </div>
                                            `;
        }

    }

    let suggestedModulesHtml = '';
    suggestedModulesHtml = `<div class="presentation-menu-box">
                                                      <h5>Suggested Modules</h5>
                                                      <div class="presentation-modules">
                                                        ${suggestedModuleItemsHtml}
                                                      </div>
                                                      <h5>Other Available Modules</h5>
                                                      <div class="presentation-modules">
                                                        ${otherAvailableModuleItemsHtml}
                                                      </div>
                                                </div>
                                             `;

    $('.presentation-menu').html(suggestedModulesHtml);
    openModalModule(slideId)

    if (isAddedCheckboxes) {

        const checkboxLabelsId = document.querySelectorAll('[data-checkbox-label-id]');
        checkboxLabelsId.forEach(checkboxLabel => {
            checkboxLabel.addEventListener('click', () => {
                checkboxLabel.classList.toggle("checkbox-label-toggle");
                const currentModule = checkboxLabel.getAttribute("data-checkbox-label-id");
                handleCheckboxChange(currentModule);
            });
        });


        function handleCheckboxChange(moduleName) {
            stepFormState.isChangedDefaultState = true;

            const module = stepFormState.suggestedServices.find(service => service.name === moduleName) ||
                stepFormState.availableServices.find(service => service.name === moduleName);

            if (module) {
                module.checked = !module.checked;
                calculateTotalCost(stepFormState)
                changePackageSelect(stepFormState)

            }

        }
    }


    calculateTotalCost(stepFormState);

}


function buildRightPanel(currentService, accordionPanelId, presentationMenuId) {

    let commonInfoServiceHtml = '';
    let videoInfoServiceHtml = '';
    for (const availableService of store.allServices) {
        if (availableService.name === currentService) {
            commonInfoServiceHtml += `
                                        <h3 class="package-info-mobile-title lg:hidden">${availableService.name}</h3>
                                        <div class="package-info--img relative">
                                            <img src=${availableService.img} alt=${availableService.name}>
                                            <button data-video-btn id="videoBtn" type="button" class="package-info--video-btn">
                                                 <img src="./images/request-invoice/play_arrow.svg" alt="play_arrow"/>
                                                 <span>info</span>
                                            </button>
                                        </div>
                                        <h3 class="package-info-descktop-title hidden lg:block">${availableService.name}</h3>
                                        <p>${availableService.overviewDescription}</p>

					                    `;
            videoInfoServiceHtml += `
                                         <h2 class="modal-demo-content-title">${availableService.name}</h2>
                                        <iframe src="${availableService.video}"
                                                 title="YouTube video player" frameborder="0"
                                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                 referrerpolicy="strict-origin-when-cross-origin"
                                                 allowfullscreen></iframe> `;

        }
    }

    $('.package-info').html(commonInfoServiceHtml);
    $('#modalVideoContent').html(videoInfoServiceHtml);

    $("[data-video-btn]").click(function () {
        $("#modalVideo").css("display", "flex").hide().fadeIn(500);
        $("#bgOpacityInner").addClass("bg-opacity-inner-open backdrop-blur-sm");
    });


    let suggestedModuleItemsHtml = '';
    for (const module of store.allServices) {

        if (module.name === currentService) {

            module.serviceTabs.forEach(item => {
                if(item.info){
                    suggestedModuleItemsHtml += `
                                     <div class="dropdown-box closing" data-tab-item="${module.name}">
                                          <div class="toggle-container">
                                                <button class="dropdown-toggle">${item.title}</button>
                                                <div class="dropdown-toggle-arrow">
                                                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_332_23416)">
                                                          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </g>
                                                        <defs>
                                                          <clipPath id="clip0_332_23416">
                                                            <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)"></rect>
                                                          </clipPath>
                                                        </defs>
                                                      </svg>
                                                </div>
                                          </div>
                                           ${item.info}
                                    </div> `;
                } else {
                    suggestedModuleItemsHtml += `
                                     <div class="dropdown-box closing" data-tab-item="${module.name}">
                                          <div class="toggle-container">
                                                <button class="dropdown-toggle">${item.title}</button>
                                          </div>
                                         
                                    </div> `;
                }

            });

        }
    }
    $(`#${accordionPanelId}`).html(suggestedModuleItemsHtml);

    dropdownTogglePanel(`${accordionPanelId}`);
    showModulePanel(stepFormState.defaultService, presentationMenuId,accordionPanelId );
}

function togglePresentationMenuItem(accordionPanelId, presentationMenuId,slideId ) {
    // Add handler for items inside dropdown

    const dropdownTabs = document.querySelectorAll(`#${slideId} [data-tab-modules-item]`);
    dropdownTabs.forEach(dropdownTab => {

        dropdownTab.addEventListener('click', (event) => {
            if(event.isTrusted){
                // Remove 'presentation-modules-item-active' class from all elements
                const activeItems = document.querySelectorAll('.presentation-modules-item-active');
                activeItems.forEach(item => item.classList.remove('presentation-modules-item-active'));

                // Add the 'presentation-modules-item-active' class to the clicked item
                const currentItem = dropdownTab.getAttribute("data-tab-modules-item");
                dropdownTab.classList.add('presentation-modules-item-active');

                buildRightPanel(currentItem, accordionPanelId, presentationMenuId);
                showModulePanel(currentItem, presentationMenuId, accordionPanelId);
            }

        });
    });
}


$(document).ready(function () {

//get selected segment or segments
    const segmentItemsList = document.querySelectorAll("[data-segment-item]");
    const btnSegmentsNext = document.getElementById("btnSegmentsNext");
    const requestInvoiceBtns = document.querySelectorAll("[data-request-invoice]");
    const requestInvoiceSubscriptionBtns = document.querySelectorAll("[data-request-invoice-subscription]");
    const requestInvoiceSuccessfulBts = document.querySelectorAll("[data-request-invoice-successful]");
    const modalSuccessfulClose = document.getElementById("modalSuccessfulClose");

    stepFormState.currentPackageSelected = optionsPackageSelect.getValue().value;
    stepFormState.currentLicencesSelected = licencesSelect.getValue().value;


    segmentItemsList.forEach((segmentItem, index) => {
        segmentItem.addEventListener('click', () => {
            segmentItem.classList.toggle("swiper-slide-checked");

            const allCheckedSegments = document.querySelectorAll('.swiper-slide-checked');

            if (allCheckedSegments.length > 0) {
                $('#btnSegmentsNext').removeAttr('disabled');
            } else {
                $('#btnSegmentsNext').attr('disabled', 'disabled');
            }

            const selectedEl = segmentItem.getAttribute("data-segment");

            const selectedIndex = stepFormState.selectedSegmentNames.indexOf(selectedEl);
            if (selectedIndex === -1) {
                stepFormState.selectedSegmentNames.push(selectedEl);
            } else {
                stepFormState.selectedSegmentNames.splice(selectedIndex, 1);
            }
        });
    });


    const addedCheckboxes = true;
    const noAddedCheckboxes = false;
    const sectionBackBtns = document.querySelectorAll('[data-section-back-btn]');

    sectionBackBtns.forEach((sectionBackBtn, index) => {
        const adjustedIndex = index + 1;
        sectionBackBtn.addEventListener('click', () => {
            const isDefaultSegment = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);


            if (adjustedIndex === 3) {
                buildLeftPanel(`accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`,noAddedCheckboxes,`slide${adjustedIndex}`);
                buildRightPanel(isDefaultSegment, `accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`);
                togglePresentationMenuItem(`accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`,`slide${adjustedIndex}`);
            }

            //for add checkboxes
            if (adjustedIndex === 4) {
                buildLeftPanel(`accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`, addedCheckboxes, `slide${adjustedIndex}`);
                buildRightPanel(isDefaultSegment, `accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`);
                togglePresentationMenuItem(`accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`,`slide${adjustedIndex}`);
            }
        });
    });


    //go to slide3
    btnSegmentsNext.addEventListener('click', () => {
        const isDefaultSegment = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);
        buildLeftPanel("accordionPanelSlide3", "presentationMenuSlide3", noAddedCheckboxes,"slide3");
        buildRightPanel(isDefaultSegment, "accordionPanelSlide3", "presentationMenuSlide3");
        togglePresentationMenuItem("accordionPanelSlide3", "presentationMenuSlide3", "slide3");

    });

    //go to slide4

    requestInvoiceBtns.forEach(requestInvoiceBtn=>{
        requestInvoiceBtn.addEventListener('click', () => {
            const isDefaultSegment = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);
            buildLeftPanel("accordionPanelSlide4", "presentationMenuSlide4", addedCheckboxes, "slide4");
            buildRightPanel(isDefaultSegment, "accordionPanelSlide4", "presentationMenuSlide4");
            togglePresentationMenuItem("accordionPanelSlide4", "presentationMenuSlide4","slide4" );
        });
    })

    //go to slide5
    requestInvoiceSubscriptionBtns.forEach(requestInvoiceSubscription=>{
        requestInvoiceSubscription.addEventListener('click', () => {
            buildSubscriptionModulesPanel()
        });
    })


    //finish step

    requestInvoiceSuccessfulBts.forEach(requestInvoiceSuccessful=>{
        requestInvoiceSuccessful.addEventListener('click', () => {
            const isValidForm = validateForm();
            if (!isValidForm) {
                return;
            } else {
                $("#modalSuccessful").css("display", "flex").hide().fadeIn(500);
            }
        });
    })


    //reset
    modalSuccessfulClose.addEventListener('click', () => {
     resetForm()
    });



});

export {stepFormState, buildLeftPanel}

