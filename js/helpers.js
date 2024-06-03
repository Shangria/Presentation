import {
    basePercent,
    basePriceValues,
    isGlobalSelected,
    licencesSelect,
    newSumOfPackage,
    regionsIngLength
} from "./request-invoice.js";

//determine segments and modules
function findSegmentById(segments, name) {
    return segments.find(s => s.name === name);
}


function getServicesFromSelectedSegments(segments, allServices) {
    let result = [];
    let seenNames = new Set();

    // Collect all service names that occur in segments
    let selectedServices = new Set();

    for (let segment of segments) {
        for (let serviceName of segment.services) {
            selectedServices.add(serviceName);
        }
    }

    // Filter all services, adding to the result only those that are selected in segments and have not yet been encountered
    for (let serviceItem of allServices) {
        if (selectedServices.has(serviceItem.name) && !seenNames.has(serviceItem.name)) {
            seenNames.add(serviceItem.name);
            result.push({
                name: serviceItem.name,
                price: serviceItem.price,
                iconImg: serviceItem.iconImg,
                img: serviceItem.img,
                description: serviceItem.description,
                overviewDescription: serviceItem.overviewDescription,
                checked: true
            });
        }
    }
    return result;
}

function getAvailableServices(allServices, suggestedServices) {
    let result = [];
    const suggestedServicesNames = suggestedServices.map(service => service.name);
    allServices.forEach(service => {
        if (!suggestedServicesNames.includes(service.name)) {
            result.push({
                name: service.name,
                price: service.price,
                iconImg: service.iconImg,
                img: service.img,
                description: service.description,
                overviewDescription: service.overviewDescription,
                checked: false
            });
        }
    });
    return result;
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
    const dropdownToggleList = document.querySelectorAll(".toggle-container, .presentation-modules-item");
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




function showModulePanel(defaultOpenId, presentationMenuId) {
    const boxPanel=document.getElementById(`${presentationMenuId}`)

    // Opening a default element
    if (defaultOpenId) {
        const defaultElement = document.querySelector(`[data-tab-item="${defaultOpenId}"]`);
        const tabModulesItem = boxPanel.querySelector(`[data-tab-modules-item="${defaultOpenId}"]`);
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



function calculateTotal(currentPackageSelect) {
    let total = 0;
    const licensesValue = licencesSelect.getValue()?.value;

    if (currentPackageSelect) {
        const basePrice = basePriceValues[currentPackageSelect];
        total += basePrice;
        if (currentPackageSelect === "customPackage") {
            let newBaseCustomPercent = total;
            Object.keys(selectedItems).forEach(key => {
                newBaseCustomPercent += selectedItems[key].price;
            });

            total = newBaseCustomPercent;

            const selectedRegionCount = isGlobalSelected ? 10 : regionsIngLength;
            const additionalRegionCost = selectedRegionCount * basePercent / 100 * newBaseCustomPercent;
            total += additionalRegionCost;

            const licenceFormatted = parseInt(licensesValue);
            const licensesCount = licenceFormatted > 1 ? licenceFormatted - 1 : 0;
            const additionalLicenseCost = licensesCount * basePercent / 100 * newBaseCustomPercent;

            total += additionalLicenseCost;

        } else {

            const selectedRegionCount = isGlobalSelected ? basePercent : regionsIngLength;
            const additionalRegionCost = selectedRegionCount * basePercent / 100 * basePrice;
            total += additionalRegionCost;

            const licenceFormatted = parseInt(licensesValue);
            const licensesCount = licenceFormatted > 1 ? licenceFormatted - 1 : 0;
            const additionalLicenseCost = licensesCount * basePercent / 100 * basePrice;

            total += additionalLicenseCost;


        }

        newSumOfPackage[currentPackageSelect] = total;
        document.getElementById("totalCounter").innerText = `${total.toLocaleString('en-US')}`;
        document.getElementById("totalCounterSecond").innerText = `${total.toLocaleString('en-US')}`;
        document.getElementById("continueBtnTotal").innerHTML = `Total: $${total.toLocaleString('en-US')} USD <img src="src/images/step-form/arrow-right-white.svg" alt="arrow"/>`;
    }

}


export {
    calculateTotal,
    showModulePanel,
    findSegmentById,
    getServicesFromSelectedSegments,
    getAvailableServices,
    determineDefaultState,
    dropdownTogglePanel
};
