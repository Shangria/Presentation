import {store} from "./data-store.js";
import {findSegmentById, getAvailableServices, getServicesFromSelectedSegments} from "./helpers.js";

$(document).ready(function () {

    let stepFormState = {
        // page 1
        selectedSegmentNames: [],

        // page 3
        suggestedServices: [],
        availableServices: [],
        location: '',
        package: '',
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


        console.log(stepFormState);
    }



    //go on slide3
    btnSegmentsNext.addEventListener('click', () => {
        buildLeftPanel();
    });
});