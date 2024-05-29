import {store} from "./data-store.js";
import {
    determineDefaultState, dropdownTogglePanel,
    findSegmentById,
    getAvailableServices,
    getServicesFromSelectedSegments,
} from "./helpers.js";

$(document).ready(function () {

    let stepFormState = {
        // page 1
        selectedSegmentNames: [],

        // page 2
        suggestedServices: [],
        availableServices: [],
        defaultService: '',

        //page3
        location: '', package: '',
        licences: 0,
        totalCost: 0,


        // page 4
        userDetails: {
            fistName: '',
        }
    };


//get selected segment or segments
    const segmentItemsList = document.querySelectorAll("[data-segment-item]");
    const btnSegmentsNext = document.getElementById("btnSegmentsNext");
    const accordionPanel = document.getElementById('accordionPanel');

    segmentItemsList.forEach((segmentItem, index) => {
        segmentItem.addEventListener('click', () => {
            segmentItem.classList.toggle("swiper-slide-checked");

            $('#btnSegmentsNext').removeAttr('disabled');

            const selectedEl = segmentItem.getAttribute("data-segment");
            stepFormState.selectedSegmentNames.push(selectedEl);

        });
    });


    function buildLeftPanel() {
        let selectedSegments = [];

        for (let segmentName of stepFormState.selectedSegmentNames) {
            let segment = findSegmentById(store.targetSegments, segmentName);
            if (segment) {
                selectedSegments.push(segment);
            }
        }

        let suggestedServices = getServicesFromSelectedSegments(selectedSegments, store.allServices);

        stepFormState.suggestedServices = suggestedServices;
        stepFormState.availableServices = getAvailableServices(store.allServices, suggestedServices);
        stepFormState.defaultService = determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames);


        let suggestedModuleItemsHtml = '';
        for (const module of stepFormState.suggestedServices) {
            const elemClass = 'presentation-modules-item ' + ' flex items-center';
            suggestedModuleItemsHtml += `
        <div class="${elemClass}" onclick="togglePresentationMenuItem(this)">
          <img src="${module.iconImg}" alt="${module.name}">
          <span>${module.name}</span>
        </div>
      `;
        }

        let otherAvailableModuleItemsHtml = '';
        for (const module of stepFormState.availableServices) {
            otherAvailableModuleItemsHtml += `
                                            <div class="presentation-modules-item flex items-center" onclick="togglePresentationMenuItem(this)">
                                              <img src="${module.iconImg}" alt="${module.name}">
                                              <span>${module.name}</span>
                                            </div>
                                            `;
        }


        const suggestedModulesHtml = `
                                              <h5>Suggested Modules</h5>
                                              <div class="presentation-modules">
                                                ${suggestedModuleItemsHtml}
                                              </div>
                                              <h5>Other Available Modules</h5>
                                              <div class="presentation-modules">
                                                ${otherAvailableModuleItemsHtml}
                                              </div>
                                             `;





        console.log(stepFormState);
        $('.presentation-menu').html(suggestedModulesHtml);
    }


    function buildRightPanel(){
        let defaultServiceHtml = '';
        for (const availableService of store.allServices) {
            if (availableService.name === stepFormState.defaultService) {
                defaultServiceHtml += `
                                        <div class="package-info--img relative">
                                            <img src=${availableService.img} alt=${availableService.name}>
                                        </div>
                                        <h3>${availableService.name}</h3>
                                        <p>${availableService.overviewDescription}</p>
					                    `;
            }
        }

        $('.package-info').html(defaultServiceHtml);

        let suggestedModuleItemsHtml = '';
        for (const module of stepFormState.suggestedServices) {

            suggestedModuleItemsHtml += `
                                     <div class="dropdown-box closing">
                                          <div class="toggle-container flex">
                                                <button class="dropdown-toggle">${module.name}</button>
                                          </div>
                                           ${module.description}
                                    </div> `;
        }
        $('.accordion-panel').html(suggestedModuleItemsHtml);
        dropdownTogglePanel()

    }


    //go on slide3
    btnSegmentsNext.addEventListener('click', () => {
        buildLeftPanel();
        buildRightPanel()
    });
});