import {findServiceByName} from "./helpers.js";

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
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Research Package',
        },
        {
            name: 'Mining Operations',
            iconImg: './images/icons/modules/mining-operations.svg',
            img: './images/slides/heavy-mobile-equipment.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Mining Operations',

        },
        {
            name: 'Key Mine Personnel',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/commodity-production.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Key Mine Personnel',

        },
        {
            name: 'Mining Contracts',
            iconImg: './images/icons/modules/mining-contracts.svg',
            img: './images/slides/mining-operations.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Mining Contracts',
        },
        {
            name: 'Project Timeline',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/reserves-and-resources.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Project Timeline',

        },
        {
            name: 'Crushing & Grinding',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/comminution-crushers-and-mills.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Crushing & Grinding',
        },
        {
            name: 'Mineral Processing',
            iconImg: './images/icons/modules/mineral-processing.svg',
            img: './images/slides/mineral-processing.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Mineral Processing',
        },
        {
            name: 'Water Supply & Pipelines',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/project-costs-and-returns.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Water Supply & Pipelines',
        },
        {
            name: 'Heavy Mobile Equipment Conveyors',
            iconImg: './images/icons/modules/mobile-equipment.svg',
            img: './images/slides/project-development-timeline.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Heavy Mobile Equipment Conveyors\'',
        },
        {
            name: 'Production Costs',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/key-mine-personnel-and-workforce.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Production Costs1',
        },
        {
            name: 'Project Costs & Returns',
            iconImg: './images/icons/modules/price-change.svg',
            img: './images/slides/heavy-mobile-equipment.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Project Costs & Returns',
        },
        {
            name: 'Remote Camps',
            iconImg: './images/icons/modules/key-managers.svg',
            img: './images/slides/commodity-production.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Remote Camps',
        },
        {
            name: 'Mapper & Coordinates',
            iconImg: './images/icons/modules/mapper.svg',
            img: './images/slides/mining-operations.jpeg',
            price: 100.00,
            description: '',
            overviewDescription: 'Identify business opportunities by assessing Mapper & Coordinates',
        },
    ]
};



//added module description
{
    findServiceByName(store.allServices, 'Research Package')
        .description = `<ul class="dropdown-menu">
                            <li class="dropdown-item">Search by Name, Location, Mine Type, Development Stage, Deposit Type, Commodity</li>
                            <li class="dropdown-item">Mine Owners - direct and indirect (via JV or subsidiary)</li>
                            <li class="dropdown-item">Office Address and Phone number</li>
                            <li class="dropdown-item">Deposit Type and Geology</li>
                            <li class="dropdown-item">Reserves and Resources</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Commodity Production</li>
                            <li class="dropdown-item">Mine Financials</li>
                            <li class="dropdown-item">Corporate Filings</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Mining Operations')
        .description = `<ul class="dropdown-menu" >
                            <li class="dropdown-item">Mining Methods and Technologies</li>
                            <li class="dropdown-item">Mining Scale, tpd</li>
                            <li class="dropdown-item">Material Mined and Milled</li>
                            <li class="dropdown-item">Mining and Milling Capacity and Rate</li>
                            <li class="dropdown-item">Hoist Shaft Depth</li>
                            <li class="dropdown-item">Backfill Type</li>
                            <li class="dropdown-item">Mine Financials</li>
                            <li class="dropdown-item">Corporate Filings</li>
                            <li class="dropdown-item">Search by Mining Methods and Backfill Types</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Key Mine Personnel')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">8,000 decision makers and consultants</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Mine and Operation Managers</li>
                            <li class="dropdown-item">Mine and Plant Maintenance Managers</li>
                            <li class="dropdown-item">Processing Managers</li>
                            <li class="dropdown-item">Procurement Staff and more…</li>
                            <li class="dropdown-item">Search by job category, job title, consulting company</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Mining Contracts')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">1,000 mines and projects with awarded and unawarded contracts</li>
                            <li class="dropdown-item">General and Engineering Managers</li>
                            <li class="dropdown-item">Contract Type (e.g. EPCM, mining, hauling, etc.)</li>
                            <li class="dropdown-item">Contract duration</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Project Timeline')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">Current Development Stage</li>
                            <li class="dropdown-item">Construction start date</li>
                            <li class="dropdown-item">Production start date</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Crushing & Grinding')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">1,200 mines and projects with crushers and mills data</li>
                            <li class="dropdown-item">Comminution summary</li>
                            <li class="dropdown-item">Mill size, model, installed power</li>
                            <li class="dropdown-item">Comminution Flowsheet Diagrams</li>
                            <li class="dropdown-item">Search by Crushers and Mills Type and Model</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Mineral Processing')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">120 Processing Technologies</li>
                            <li class="dropdown-item">Mineral Processing Summary</li>
                            <li class="dropdown-item">Reagents</li>
                            <li class="dropdown-item">Recovery Rates</li>
                            <li class="dropdown-item">Flowsheet Diagrams</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Water Supply & Pipelines')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">120 Processing Technologies</li>
                            <li class="dropdown-item">Mineral Processing Summary</li>
                            <li class="dropdown-item">Reagents</li>
                            <li class="dropdown-item">Recovery Rates</li>
                            <li class="dropdown-item">Flowsheet Diagrams</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Heavy Mobile Equipment Conveyors')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">1,400 mines and projects with HME fleet data</li>
                            <li class="dropdown-item">2,000 models</li>
                            <li class="dropdown-item">62,000 units</li>
                            <li class="dropdown-item">Electric trucks and shovels</li>
                            <li class="dropdown-item">Autonomous trucks and drills</li>
                            <li class="dropdown-item">Search equipment by Type and Model</li>
                         </ul>`;
    findServiceByName(store.allServices, 'Production Costs')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">1,100 mines and projects with reported production costs</li>
                            <li class="dropdown-item">Cash Costs</li><li>Total Cash Costs</li>
                            <li class="dropdown-item">AISC</li><li>All-in Costs</li>
                            <li class="dropdown-item">Mine &amp; Mill Operating Costs ($/t mined or milled)</li>
                         </ul>`;
    findServiceByName(store.allServices, 'Project Costs & Returns')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">600 projects at PEA, PFS and FS stages</li>
                            <li class="dropdown-item">CapEx</li>
                            <li class="dropdown-item">OpEx</li>
                            <li class="dropdown-item">Revenue</li>
                            <li class="dropdown-item">Cash Flow</li>
                            <li class="dropdown-item">Net Present Value (NPV)</li>
                            <li class="dropdown-item">Interntal Rate of Return (IRR)</li>
                         </ul>`;
    findServiceByName(store.allServices, 'Remote Camps')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">460 mines and projects with remote camps</li>
                            <li class="dropdown-item">Camp size (e.g. person, beds or rooms)</li>
                        </ul>`;
    findServiceByName(store.allServices, 'Mapper & Coordinates')
        .description = `<ul  class="dropdown-menu">
                            <li class="dropdown-item">Plot search results on Google Map</li>
                            <li class="dropdown-item">Measure distance to infrastructure</li>
                            <li class="dropdown-item">Download Coordinates</li>
                        </ul>`;
}