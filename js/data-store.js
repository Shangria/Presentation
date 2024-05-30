
export let store = {
    targetSegments: [
        {
            name: 'Mining',
            defaultSelected: 'Mining Contracts',
            services: ['Research Package', 'Mining Operations', 'Key Mine Personnel', 'Mining Contracts', 'Project Timeline',]
        },
        {
            name: 'Backfilling',
            defaultSelected: 'Key Mine Personnel',
            services: ['Research Package', 'Mining Operations', 'Key Mine Personnel', 'Mining Contracts', 'Project Timeline']
        },
        {
            name: 'Mineral Processing',
            defaultSelected: 'Mineral Processing',
            services: ['Research Package', 'Mineral Processing', 'Key Mine Personnel', 'Project Timeline']
        },
        {
            name: 'Milling Equipment',
            defaultSelected: 'Crushing & Grinding',
            services: ['Research Package', 'Crushing & Grinding', 'Key Mine Personnel', 'Project Timeline']
        },
        {
            name: 'Mobile Equipment',
            defaultSelected: 'Heavy Mobile Equipment',
            services: ['Research Package', 'Crushing & Grinding', 'Heavy Mobile Equipment', 'Project Timeline']
        },
        {
            name: 'Conveyors',
            defaultSelected: 'Conveyors',
            services: ['Research Package', 'Conveyors', 'Key Mine Personnel', 'Project Timeline']
        },
        {
            name: 'Pipelines',
            defaultSelected: 'Water Supply & Pipelines',
            services: ['Research Package', 'Water Supply & Pipelines', 'Key Mine Personnel', 'Project Timeline']
        },
        {
            name: 'Project Consulting',
            defaultSelected: 'Project Costs & Returns',
            services: ['Research Package', 'Key Mine Personnel', 'Production Costs', 'Project Costs & Returns', 'Mining Contracts']
        },
        {
            name: 'Lodging',
            defaultSelected: 'Remote Camps',
            services: ['Research Package', 'Remote Camps', 'Key Mine Personnel',]
        },
    ],

    allServices: [
        {
            name: 'Research Package',
            iconImg: './images/icons/modules/research.svg',
            img: './images/slides/key-mine-personnel-and-workforce.jpeg',
            price: 2000.00,
            serviceTabs:[
                {
                    title:"Research Package1",
                    info:`<ul class="dropdown-menu">
                            <li class="dropdown-item">Search by Name, Location, Mine Type, Development Stage, Deposit Type, Commodity</li>
                            <li class="dropdown-item">Mine Owners - direct and indirect (via JV or subsidiary)</li>
                            <li class="dropdown-item">Office Address and Phone number</li>
                            <li class="dropdown-item">Deposit Type and Geology</li>
                            <li class="dropdown-item">Reserves and Resources</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Mine Financials</li>
                            <li class="dropdown-item">Corporate Filings</li>
                        </ul>`
                },
                {
                    title:"Research Package2",
                    info:`<ul class="dropdown-menu">
                            <li class="dropdown-item">Search by Name, Location, Mine Type, Development Stage, Deposit Type, Commodity</li>
                            <li class="dropdown-item">Mine Owners - direct and indirect (via JV or subsidiary)</li>
                            <li class="dropdown-item">Office Address and Phone number</li>
                            <li class="dropdown-item">Deposit Type and Geology</li>
                            <li class="dropdown-item">Reserves and Resources</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Mine Financials</li>
                            <li class="dropdown-item">Corporate Filings</li>
                        </ul>`
                },
                {
                    title:"Research Package3",
                    info:`<ul class="dropdown-menu">
                            <li class="dropdown-item">Search by Name, Location, Mine Type, Development Stage, Deposit Type, Commodity</li>
                            <li class="dropdown-item">Mine Owners - direct and indirect (via JV or subsidiary)</li>
                            <li class="dropdown-item">Office Address and Phone number</li>
                            <li class="dropdown-item">Deposit Type and Geology</li>
                            <li class="dropdown-item">Reserves and Resources</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Mine Financials</li>
                            <li class="dropdown-item">Corporate Filings</li>
                        </ul>`
                },
                {
                    title:"Research Package4",
                    info:`<ul class="dropdown-menu">
                            <li class="dropdown-item">Search by Name, Location, Mine Type, Development Stage, Deposit Type, Commodity</li>
                            <li class="dropdown-item">Mine Owners - direct and indirect (via JV or subsidiary)</li>
                            <li class="dropdown-item">Office Address and Phone number</li>
                            <li class="dropdown-item">Deposit Type and Geology</li>
                            <li class="dropdown-item">Reserves and Resources</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Mine Financials</li>
                            <li class="dropdown-item">Corporate Filings</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Research Package',
        },
        {
            name: 'Mining Operations',
            iconImg: './images/icons/modules/mining-operations.svg',
            img: './images/slides/heavy-mobile-equipment.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Mining Operations1",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mining Operations2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mining Operations3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mining Operations4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Mining Operations',

        },
        {
            name: 'Key Mine Personnel',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/commodity-production.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Key Mine Personnel1",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Key Mine Personnel2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Key Mine Personnel3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Key Mine Personnel4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Key Mine Personnel',

        },
        {
            name: 'Mining Contracts',
            iconImg: './images/icons/modules/mining-contracts.svg',
            img: './images/slides/mining-operations.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Mining Contracts",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mining Contracts2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mining Contracts3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mining Contracts4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Mining Contracts',
        },
        {
            name: 'Project Timeline',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/reserves-and-resources.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Project Timeline",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Project Timeline2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Project Timeline3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Project Timeline4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Project Timeline',

        },
        {
            name: 'Crushing & Grinding',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/comminution-crushers-and-mills.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Crushing & Grinding",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Crushing & Grinding2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Crushing & Grinding3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Crushing & Grinding4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Crushing & Grinding',
        },
        {
            name: 'Mineral Processing',
            iconImg: './images/icons/modules/mineral-processing.svg',
            img: './images/slides/mineral-processing.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Mineral Processing",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mineral Processing2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mineral Processing3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mineral Processing4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Mineral Processing',
        },
        {
            name: 'Water Supply & Pipelines',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/project-costs-and-returns.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Water Supply & Pipelines",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Water Supply & Pipelines2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Water Supply & Pipelines3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Water Supply & Pipelines4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Water Supply & Pipelines',
        },
        {
            name: 'Heavy Mobile Equipment',
            iconImg: './images/icons/modules/mobile-equipment.svg',
            img: './images/slides/project-development-timeline.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Heavy Mobile Equipment",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Heavy Mobile Equipment2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Heavy Mobile Equipment3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Heavy Mobile Equipment4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Heavy Mobile Equipment',
        },
        {
            name: 'Production Costs',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/key-mine-personnel-and-workforce.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Production Costs",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Production Costs2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Production Costs3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Production Costs4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Production Costs1',
        },
        {
            name: 'Project Costs & Returns',
            iconImg: './images/icons/modules/price-change.svg',
            img: './images/slides/heavy-mobile-equipment.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Project Costs & Returns",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Project Costs & Returns2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Project Costs & Returns3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Project Costs & Returns4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Project Costs & Returns',
        },
        {
            name: 'Remote Camps',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/commodity-production.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Remote Camps",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Remote Camps2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Remote Camps3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Remote Camps4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Remote Camps',
        },
        {
            name: 'Mapper & Coordinates',
            iconImg: './images/icons/modules/mapper.svg',
            img: './images/slides/mining-operations.jpeg',
            price: 100.00,
            serviceTabs:[
                {
                    title:"Mapper & Coordinates",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mapper & Coordinates2",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mapper & Coordinates3",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
                {
                    title:"Mapper & Coordinates4",
                    info:`<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`
                },
            ],
            overviewDescription: 'Identify business opportunities by assessing Mapper & Coordinates',
        },
    ]
};
