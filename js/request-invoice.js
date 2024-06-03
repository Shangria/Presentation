export const optionalSelectContent = {
    researchPackage: {
        name: "Research Package",
        additionalTextBottom: "Perfect for mining industry research! Encompasses Mine Type, Location, Address, Ownership, Deposit, Reserves, Commodity Production, LOM, Workforce, and Financials. Exceptonal value for your dollar!",
    },
    customPackage: {
        name: "Custom Package",
        additionalTextBottom: "Ideal for business development, specialized research or when your budget is limited! Includes all Research Package data points plus your selection of optional data modules.",
    },
    ultimatePackage: {
        name: "Ultimate Package",
        additionalTextBottom: "Comprehensive mining intelligence! Best suitable for large corporations, consulting firms and institutional investors. Includes all Research Package data points and all optional data modules.",
    },
};


export let isGlobalSelected = true;
export let regionsIngLength = 0;
export const mainRegionSelectValue = "Global";
export const maxRegionsValues = 5;
export const basePercent = 10;

export const basePriceValues = {
    researchPackage: 2000,
    customPackage: 2000,
    ultimatePackage: 10,
};
export const newSumOfPackage = {
    researchPackage: 2000,
    customPackage: 2000,
    ultimatePackage: 10,
};

//create licenses select
const choicesArray = [];
for (let i = 1; i <= 99; i++) {
    choicesArray.push({
        value: `${i}`,
        label: `${i}`
    });
}

export const licencesSelect = new Choices('#licencesSelect', {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
    choices: choicesArray,
});


//create option select
export const optionsPackageSelect = new Choices('#optionsSelect', {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
});



document.addEventListener('DOMContentLoaded', () => {
    const continueBtnStepOne = document.getElementById('continueBtnStepOne');
    const globalCheckbox = document.querySelector('input[value="global"]');
    const checkboxes = document.querySelectorAll('[data-regions-input]');
    const regionSelectedItems = document.getElementById('selectedItems');
    const regionsSelect = document.getElementById('regionsSelect');
    const regionsItemBox = document.getElementById('regionsItemBox');
    const additionalTextOptionsSelect = document.getElementById('additionalTextOptionsSelect');
    let regionsIng = [];


    //region custom select code start

    //toggle select regions click outside
    regionSelectedItems.addEventListener('click', (event) => {
        regionsItemBox.classList.toggle("open");
        regionSelectedItems.classList.add("open");
        event.stopPropagation();
    });

    //close select click outside
    document.addEventListener('click', (event) => {
        if (!regionsSelect.contains(event.target)) {
            regionsItemBox.classList.remove("open");
            regionSelectedItems.classList.remove("open");
        }
    });

    function updateGlobalSelection() {
        isGlobalSelected = regionsIng.includes(mainRegionSelectValue);
        regionsIngLength = regionsIng.length;
    }


    //update regions select when choose value
    function updateItemsDisplay() {
        regionsIng = [];
        const selectedCheckboxes = Array.from(checkboxes).filter(c => c.checked && c.value !== mainRegionSelectValue.toLowerCase());
        if (globalCheckbox.checked) {
            regionSelectedItems.textContent = mainRegionSelectValue;
            regionsIng.push(mainRegionSelectValue);

            continueBtnStepOne.classList.remove('disabled-btn');
            return mainRegionSelectValue;
        } else {
            const count = selectedCheckboxes.length;

            checkboxes.forEach(item => {

                if (!item.checked) {
                    item.parentNode.classList.remove("choose");
                }

                if (count === 1 && item.checked) {
                    regionSelectedItems.textContent = item.name;
                    regionsIng.push(item.value);
                    item.parentNode.classList.add("choose");
                    continueBtnStepOne.classList.remove('disabled-btn');
                    return item.value;
                } else if (count === 0 && !item.checked) {
                    regionSelectedItems.textContent = `Region (${count})`;
                    regionsIng.push(item.value);
                    regionsIng = [];
                    continueBtnStepOne.classList.add('disabled-btn');
                    return `Region (${count})`;
                } else if (count >= 2 && item.checked) {
                    regionSelectedItems.textContent = `Regions (${count})`;
                    regionsIng.push(item.value);
                    item.parentNode.classList.add("choose");
                    continueBtnStepOne.classList.remove('disabled-btn');
                    return `Regions (${count})`;
                }
            });

        }
    }


    function handleCheckboxChange() {
        const selectedCheckboxes = Array.from(checkboxes).filter(c => c.checked && c !== globalCheckbox);

        if (globalCheckbox.checked) {
            selectedCheckboxes.forEach(c => {
                c.checked = false;
                c.parentNode.classList.remove('choose');
            });
        } else if (selectedCheckboxes.length >= maxRegionsValues) {
            globalCheckbox.checked = true;
            checkboxes.forEach(c => {
                if (c !== globalCheckbox) {
                    c.checked = false;
                    c.parentNode.classList.remove('choose');
                } else {
                    c.parentNode.classList.add('choose');
                }
            });
        } else {
            checkboxes.forEach(c => {
                c.disabled = false;
                c.parentNode.classList.remove('disabled');
            });
            globalCheckbox.parentNode.classList.remove('choose');
        }

        updateItemsDisplay();
        updateGlobalSelection();
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox !== globalCheckbox) {
                globalCheckbox.checked = false;
                globalCheckbox.parentNode.classList.remove('choose');
            }
            handleCheckboxChange();
        });
    });

    //region custom select code finish


    //package select
    optionsPackageSelect.passedElement.element.addEventListener('change', (event) => {
        const value = event.detail.value;

        if (optionsPackageSelect.getValue().value === "researchPackage") {

        }

        if (optionsPackageSelect.getValue().value === "customPackage") {

        }

        if (optionsPackageSelect.getValue().value === "ultimatePackage") {

        }


        additionalTextOptionsSelect.innerHTML = optionalSelectContent[value].additionalTextBottom;
        additionalTextOptionsSelect.classList.add('show-additional-text')
    });
});




