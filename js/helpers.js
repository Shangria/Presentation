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
    return segments.find(s => s.id === name);
}

function getServicesFromSelectedSegments(segments, allServices) {
    debugger
    let result = [];
    for (let segment of segments) {
        for (let service of segment.services) {
            if (!result.includes(service)) {

                allServices.map(serviceItem=>{
                    if(serviceItem.name === service){
                        const chooseModule={
                            name: serviceItem.name,
                            price: serviceItem.price,
                            description: '',
                            checked: false
                        };
                        result.push(chooseModule);
                    }
                })

            }
        }
    }
    return result;
}

function getAvailableServices(allServices, suggestedServices) {
    const suggestedServicesNames = suggestedServices.map(serviceName => serviceName);

    const result = allServices.filter(service => !suggestedServicesNames.includes(service.name));

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


function setupDropdownToggle(element) {
    element.addEventListener('click', (event) => {
        const checkBox = event.target.closest('.check-box-label');
        const dropDownButton = event.target.closest('.dropdown-toggle') || event.target.closest('.toggle-container');


        if (!checkBox && dropDownButton) {
            const dropdownBox = dropDownButton.closest('.dropdown-box');
            if (dropdownBox) {
                const root = dropdownBox.closest('.optional-content');
                const isSelectedOptionsContainer = !!dropdownBox.closest('#selectedOptionsContainer');
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
                                const scrollVal = isSelectedOptionsContainer ?
                                    root.scrollTop - (root.scrollTop - box.offsetTop) - (isMobile ? 60 : 90) : // add a root title height value
                                    root.scrollTop - (root.scrollTop - box.offsetTop);

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
        }
    });
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


export {setupDropdownToggle, calculateTotal, findSegmentById, getServicesFromSelectedSegments, getAvailableServices};
