import {store} from "./data-store.js";
import {
    determineDefaultState,
    dropdownTogglePanel,
    findSegmentById,
    getAvailableServices,
    getServicesFromSelectedSegments,
    showModulePanel,
} from "./helpers.js";
import {optionsPackageSelect} from "./request-invoice.js";

$(document).ready(function () {

    let stepFormState = {
        // page 1
        selectedSegmentNames: [],

        // page 2
        suggestedServices: [],
        availableServices: [],
        defaultService: '',
        isChangedDefaultState:false,

        //page3
        location: '', package: '',
        licences: 1,
        totalCost: 0,


        // page 4
        userDetails: {
            fistName: '',
        }
    };


//get selected segment or segments
    const segmentItemsList = document.querySelectorAll("[data-segment-item]");
    const btnSegmentsNext = document.getElementById("btnSegmentsNext");
    const requestInvoice = document.getElementById("requestInvoice");
    const selectedPackageValue = optionsPackageSelect.getValue(true);
    console.log(selectedPackageValue);

    segmentItemsList.forEach((segmentItem, index) => {
        segmentItem.addEventListener('click', () => {
            segmentItem.classList.toggle("swiper-slide-checked");

            const allCheckedSegments=document.querySelectorAll('.swiper-slide-checked')

            if(allCheckedSegments.length>0){
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


    function buildLeftPanel(accordionPanelId, presentationMenuId, isAddedCheckboxes=false) {
        let selectedSegments = [];

        for (let segmentName of stepFormState.selectedSegmentNames) {
            let segment = findSegmentById(store.targetSegments, segmentName);
            if (segment) {
                selectedSegments.push(segment);
            }
        }


        if(!stepFormState.isChangedDefaultState){
            let suggestedServices;
            suggestedServices = getServicesFromSelectedSegments(selectedSegments, store.allServices);
            stepFormState.suggestedServices = suggestedServices;
            stepFormState.availableServices = getAvailableServices(store.allServices, suggestedServices);
        }

        stepFormState.defaultService = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);


        let suggestedModuleItemsHtml = '';
        for (const module of stepFormState.suggestedServices) {
            const elemClass = 'presentation-modules-item ' + ' flex items-center';

            if (isAddedCheckboxes) {

                suggestedModuleItemsHtml += `
                                                <div class="${elemClass} justify-between">
                                                        <div class="module-info flex items-center justify-between" data-tab-modules-item="${module.name}">
                                                            <img src="${module.iconImg}" alt="${module.name}">
                                                            <span>${module.name}</span>
                                                        </div>
                                                        <label class="custom-checkbox-label ${module.checked && "checkbox-label-toggle"}" data-checkbox-label-id="${module.name}">
                                                             <span class="module-price">$${module.price.toFixed(2)} USD</span>
                                                              <span class="checkmark"></span>
                                                            </label>
                                                    </div>
                                            `;
            } else {

                suggestedModuleItemsHtml += `
                                            <div class="${elemClass}" data-tab-modules-item="${module.name}">
                                              <img src="${module.iconImg}" alt="${module.name}">
                                              <span>${module.name}</span>
                                            </div>
                                            `;
            }

        }


        let otherAvailableModuleItemsHtml = '';
        for (const module of stepFormState.availableServices) {
            const elemClass = 'presentation-modules-item ' + ' flex items-center';
            if (isAddedCheckboxes) {
                otherAvailableModuleItemsHtml += `
                                            <div class="${elemClass} justify-between">
                                                        <div class="module-info flex items-center justify-between" data-tab-modules-item="${module.name}">
                                                            <img src="${module.iconImg}" alt="${module.name}">
                                                            <span>${module.name}</span>
                                                        </div>
                                                        <label class="custom-checkbox-label ${module.checked && "checkbox-label-toggle"}" data-checkbox-label-id="${module.name}">
                                                             <span class="module-price">$${module.price.toFixed(2)} USD</span>
                                                              <span class="checkmark"></span>
                                                            </label>
                                                    </div>
                                            `;
            }else {
                otherAvailableModuleItemsHtml += `
                                            <div class="presentation-modules-item flex items-center" data-tab-modules-item="${module.name}">
                                              <img src="${module.iconImg}" alt="${module.name}">
                                              <span>${module.name}</span>
                                            </div>
                                            `;
            }

        }

        let suggestedModulesHtml=''
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

        if (isAddedCheckboxes) {

            const checkboxLabelsId = document.querySelectorAll('[data-checkbox-label-id]');
            checkboxLabelsId.forEach(checkboxLabel=>{
                checkboxLabel.addEventListener('click', ()=>{
                    checkboxLabel.classList.toggle("checkbox-label-toggle")
                    const currentModule=checkboxLabel.getAttribute("data-checkbox-label-id")
                    handleCheckboxChange(currentModule)

                    console.log(stepFormState)

                })
            })



            function handleCheckboxChange(moduleName) {
                stepFormState.isChangedDefaultState=true;
                const module = stepFormState.suggestedServices.find(service => service.name === moduleName) ||
                    stepFormState.availableServices.find(service => service.name === moduleName);

                if (module) {
                    module.checked = !module.checked;
                }
            }
        }


        togglePresentationMenuItem(accordionPanelId, presentationMenuId);
    }


    function buildRightPanel(currentService, accordionPanelId, presentationMenuId) {

        let commonInfoServiceHtml = '';
        for (const availableService of store.allServices) {
            if (availableService.name === currentService) {
                commonInfoServiceHtml += `
                                        <div class="package-info--img relative">
                                            <img src=${availableService.img} alt=${availableService.name}>
                                        </div>
                                        <h3>${availableService.name}</h3>
                                        <p>${availableService.overviewDescription}</p>
					                    `;
            }
        }

        $('.package-info').html(commonInfoServiceHtml);

        let suggestedModuleItemsHtml = '';
        for (const module of store.allServices) {

            if (module.name === currentService) {

                module.serviceTabs.forEach(item => {
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
                });

            }
        }
        $(`#${accordionPanelId}`).html(suggestedModuleItemsHtml);
        dropdownTogglePanel(`${accordionPanelId}`)
        showModulePanel(stepFormState.defaultService, presentationMenuId);
    }

    function togglePresentationMenuItem(accordionPanelId, presentationMenuId) {
        // Add handler for items inside dropdown

        const dropdownTabs = document.querySelectorAll('[data-tab-modules-item]');
        dropdownTabs.forEach(dropdownTab => {

            dropdownTab.addEventListener('click', (event) => {

                // Remove 'presentation-modules-item-active' class from all elements
                const activeItems = document.querySelectorAll('.presentation-modules-item-active');
                activeItems.forEach(item => item.classList.remove('presentation-modules-item-active'));


                // Add the 'presentation-modules-item-active' class to the clicked item
                const currentItem = dropdownTab.getAttribute("data-tab-modules-item");
                dropdownTab.classList.add('presentation-modules-item-active');
                buildRightPanel(currentItem, accordionPanelId, presentationMenuId);

                showModulePanel(currentItem, presentationMenuId)
            });
        });
    }


    const addedCheckboxes=true;
    const sectionBackBtns = document.querySelectorAll('[data-section-back-btn]');

    sectionBackBtns.forEach((sectionBackBtn, index) => {
        const adjustedIndex = index + 1;
        sectionBackBtn.addEventListener('click', () => {
            const isDefaultSegment = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);


            if (adjustedIndex === 3 ) {
                buildLeftPanel(`accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`,);
                buildRightPanel(isDefaultSegment, `accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`);
            }

            //for add checkboxes
            if(adjustedIndex === 4 ){
                buildLeftPanel(`accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`, addedCheckboxes);
                buildRightPanel(isDefaultSegment, `accordionPanelSlide${adjustedIndex}`, `presentationMenuSlide${adjustedIndex}`);
            }
        });
    });



    //go to slide3
    btnSegmentsNext.addEventListener('click', () => {
        const isDefaultSegment = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);
        buildLeftPanel("accordionPanelSlide3", "presentationMenuSlide3");
        buildRightPanel(isDefaultSegment, "accordionPanelSlide3", "presentationMenuSlide3");
    });

    //go to slide4
    requestInvoice.addEventListener('click', () => {
        console.log(stepFormState)
        const isDefaultSegment = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);
        buildLeftPanel("accordionPanelSlide4", "presentationMenuSlide4", addedCheckboxes);
        buildRightPanel(isDefaultSegment, "accordionPanelSlide4", "presentationMenuSlide4");
    });


});