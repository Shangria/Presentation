import {store} from "./data-store.js";
import {
    determineDefaultState, dropdownTogglePanel,
    findSegmentById,
    getAvailableServices,
    getServicesFromSelectedSegments, showDefaultModule,
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
        <div class="${elemClass}">
          <img src="${module.iconImg}" alt="${module.name}">
          <span>${module.name}</span>
        </div>
      `;
        }


        let otherAvailableModuleItemsHtml = '';
        for (const module of stepFormState.availableServices) {
            otherAvailableModuleItemsHtml += `
                                            <div class="presentation-modules-item flex items-center" >
                                              <img src="${module.iconImg}" alt="${module.name}">
                                              <span>${module.name}</span>
                                            </div>
                                            `;
        }


        const suggestedModulesHtml = `<div class="presentation-menu-box">
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

        console.log(stepFormState);
        $('.presentation-menu').html(suggestedModulesHtml);

        showDefaultModule(stepFormState)
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
        for (const module of store.allServices) {
            const currentItem=stepFormState.defaultService
            if(module.name===currentItem){
                suggestedModuleItemsHtml += `
                                     <div class="dropdown-box closing" data-tab-item="${module.name}">
                                          <div class="toggle-container">
                                                <button class="dropdown-toggle">${module.name}</button>
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
                                           ${module.description}
                                    </div> `;
            }


        }
        $('.accordion-panel').html(suggestedModuleItemsHtml);
        dropdownTogglePanel(stepFormState.defaultService)

    }



    //go on slide3
    btnSegmentsNext.addEventListener('click', () => {
        buildLeftPanel();
        buildRightPanel()
    });
});