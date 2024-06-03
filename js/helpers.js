import {stepFormState} from "./packages-modules.js";

//determine segments and modules
function findSegmentById(segments, name) {
    return segments.find(s => s.name === name);
}


function getServicesFromSelectedSegments(segments, allServices, currentPackage) {
    let result = [];
    let seenNames = new Set();
    console.log(currentPackage);

    let selectedServices = new Set();
    segments.forEach(segment => {
        segment.services.forEach(serviceName => {
            selectedServices.add(serviceName);
        });
    });

    allServices.forEach(serviceItem => {
        if (selectedServices.has(serviceItem.name) && !seenNames.has(serviceItem.name)) {
            seenNames.add(serviceItem.name);

            let isChecked = currentPackage === "customPackage" || currentPackage === "ultimatePackage" || (currentPackage === "researchPackage" && serviceItem.name === "Research Package");
            result.push(createServiceItem(serviceItem, isChecked));
        }
    });

    return result;
}



function getAvailableServices(allServices, suggestedServices, currentPackage) {
    let result = [];
    const suggestedServicesNames = new Set(suggestedServices.map(service => service.name));
    allServices.forEach(service => {
        if (!suggestedServicesNames.has(service.name)) {
            result.push(createServiceItem(service, currentPackage === "ultimatePackage"));
        }
    });
    return result;
}

function createServiceItem(service, checked) {
    return {
        name: service.name,
        price: service.price,
        iconImg: service.iconImg,
        img: service.img,
        description: service.description,
        overviewDescription: service.overviewDescription,
        checked: checked
    };
}


function determineDefaultState(allTargetSegments, allServices, chooseSegments) {
    let result = '';
    for (let allTargetSegment of allTargetSegments) {

        if (chooseSegments.length > 1) {
            result = "Research Package";
        }

        if (chooseSegments.includes(allTargetSegment.name)) {
            result = allTargetSegment.defaultSelected;
        }
    }

    return result;
}

//

//show modals
$(document).ready(function () {
    $("#requestDemo").click(function () {
        $("#modalDemo").css("display", "flex").hide().fadeIn(500);
    });

    function closeModal() {
        $("#modalDemo").fadeOut(500, function () {
            $(this).css("display", "none");
        });
    }

    $(".modal-demo-content-close").click(function () {
        closeModal();
    });

    $("#sendMessageBtn").click(function () {
        closeModal();
    });

    $(window).click(function (event) {
        if ($(event.target).hasClass('modal-demo')) {
            closeModal();
        }
    });
});

$(document).ready(function () {
    $("#termsOfUseOpen").click(function () {
        $("#termsOfUseModal").css("display", "flex").hide().fadeIn(500);
    });

    function closeModal() {
        $("#termsOfUseModal").fadeOut(500, function () {
            $(this).css("display", "none");
        });
    }

    $("#termsOfUseClose").click(function () {
        closeModal();
    });


    $(window).click(function (event) {
        if ($(event.target).hasClass('modal-terms-of-use-box')) {
            closeModal();
        }
    });
});

//

function dropdownTogglePanel(accordionPanelId) {
    const dropdownToggleList = document.querySelectorAll(".toggle-container");
    dropdownToggleList.forEach(dropdownToggle => {

        dropdownToggle.addEventListener('click', (event) => {

            const dropDownButton = event.target.closest('.dropdown-toggle') || event.target.closest('.toggle-container') || event.target.closest('.dropdown-toggle-arrow') || event.target.closest('.presentation-modules-item');
            const dropdownBox = dropDownButton.closest('.dropdown-box');
            if (dropdownBox) {

                const root = document.getElementById(`${accordionPanelId}`);
                const isMobile = window.innerWidth < 1024;

                document.querySelectorAll('.dropdown-box').forEach(box => {
                    const drop = box.querySelector('.dropdown-menu');

                    if (box === dropdownBox) {
                        box.classList.remove('closing');
                        box.classList.add('drop-down-item-open');

                        const dropHeight = drop.scrollHeight;
                        drop.style.maxHeight = `${dropHeight}px`;

                        setTimeout(() => {
                            if (root.scrollTop > box.offsetTop - 90) { // if the drop is outside of overflow
                                const scrollVal = root.scrollTop - (root.scrollTop - box.offsetTop);

                                root.scrollTo({top: scrollVal, behavior: "smooth"});
                            }
                        }, 400);
                    } else {
                        box.classList.add('closing');
                        drop.removeAttribute('style');
                        setTimeout(() => {
                            box.classList.remove('drop-down-item-open');
                        }, 10);
                    }
                });
            }
        });
    });

}


function showModulePanel(currentTab, presentationMenuId) {
    const currentItemForOpenById = currentTab;

    const boxPanel = document.getElementById(`${presentationMenuId}`);

    if (currentItemForOpenById) {

        const defaultElement = document.querySelector(`[data-tab-item="${currentItemForOpenById}"]`);
        const tabModulesItem = boxPanel.querySelector(`[data-tab-modules-item="${currentItemForOpenById}"]`);
        if (defaultElement) {
            defaultElement.classList.add('drop-down-item-open');
            tabModulesItem.classList.add('presentation-modules-item-active');
            const drop = defaultElement.querySelector('.dropdown-menu');
            const dropHeight = drop.scrollHeight;

            setTimeout(() => {
                drop.style.maxHeight = `${dropHeight}px`;
            }, 300);
        }
    }
}

function calculateTotalCost(store) {
    let total = 0;
    console.log(store);
    const licensesValue = store.currentLicencesSelected;
    const isGlobalSelected = store.regionsArr.includes("Global");
    const basePercent = 10; // Percentage for regions and licenses
    let basePriceValue = 0;


    //get basePriceValue
    store.suggestedServices.forEach(service => {
        if (service.checked) {
            basePriceValue += service.price;
        }
    });

    store.availableServices.forEach(service => {
        if (service.checked) {
            basePriceValue += service.price;
        }
    });

    total += basePriceValue;


    const selectedRegionCount = isGlobalSelected ? basePercent : store.regionsArr.length;
    const additionalRegionCost = selectedRegionCount * basePercent / 100 * basePriceValue;
    total += additionalRegionCost;

    const licenceFormatted = parseInt(licensesValue);
    const licensesCount = licenceFormatted > 1 ? licenceFormatted - 1 : 0;
    const additionalLicenseCost = licensesCount * basePercent / 100 * basePriceValue;

    total += additionalLicenseCost;

    store.totalCost = total;
    updateTotalCount(stepFormState);
}

function updateTotalCount(store) {
    const allTotalCounters = document.querySelectorAll('[data-total-counter-box]');
    allTotalCounters.forEach(totalCounter => {
        totalCounter.innerText = store.totalCost;
    });
}


export {
    showModulePanel,
    findSegmentById,
    getServicesFromSelectedSegments,
    getAvailableServices,
    determineDefaultState,
    dropdownTogglePanel,
    calculateTotalCost,
    updateTotalCount
};
