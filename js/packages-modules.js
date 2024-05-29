import {store} from "./data-store.js";
import {
    determineDefaultState,
    findSegmentById,
    getAvailableServices,
    getServicesFromSelectedSegments
} from "./helpers.js";

$(document).ready(function () {

    let stepFormState = {
        // page 1
        selectedSegmentNames: [],

        // page 3
        suggestedServices: [],
        availableServices: [],
        location: '', package: '',
        licences: 0,
        totalCost: 0,
        defaultService:'',

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

        stepFormState.defaultService=determineDefaultState(store.targetSegments, store.allServices, stepFormState.selectedSegmentNames )


        let defaultServiceHtml = '';
        for (const availableService of store.allServices) {
            if (availableService.name=== stepFormState.defaultService) {
debugger
                defaultServiceHtml += `
							<div class="package-info--img relative">
								<img src=${availableService.img} alt=${availableService.name}>
							</div>
							<h3>${availableService.name}</h3>
							<p>${availableService.overviewDescription}</p>
					    `;
            }
        }



        console.log(stepFormState)
        $('.package-info').html(defaultServiceHtml);
        $('.presentation-menu').html(suggestedModulesHtml);
    }



    //go on slide3
    btnSegmentsNext.addEventListener('click', () => {
        buildLeftPanel();
    });
});