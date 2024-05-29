import {findServiceByName} from "./helpers.js";

export let store = {
    targetSegments: [
        {
            name: 'Mining',
            id: 'mining',
            defaultSelected: 'Mining Contracts',
            services: ['Research Package', 'Mining Operations', 'Key Mine Personnel', 'Mining Contracts', 'Project Timeline',]
        },
        {
            name: 'Backfilling',
            id: 'backfilling',
            defaultSelected: 'Key Mine Personnel',
            services: ['Research Package', 'Mining Operations', 'Key Mine Personnel', 'Mining Contracts', 'Project Timeline']
        },
        {
            name: 'Mineral Processing',
            id: 'mineralProcessing',
            defaultSelected: 'Mineral Processing',
            services: ['Research Package', 'Mineral Processing', 'Key Mine Personnel', 'Project Timeline']
        },
        {
            name: 'Milling Equipment',
            id: 'millingEquipment',
            defaultSelected: 'Crushing & Grinding',
            services: ['Research Package', 'Crushing & Grinding', 'Key Mine Personnel', 'Project Timeline']
        },
        {
            name: 'Mobile Equipment',
            id: 'mobileEquipment',
            defaultSelected: 'Heavy Mobile Equipment',
            services: ['Research Package', 'Crushing & Grinding', 'Heavy Mobile Equipment', 'Project Timeline']
        },
        {
            name: 'Conveyors',
            id: 'conveyors',
            defaultSelected: 'Conveyors',
            services: ['Research Package', 'Conveyors', 'Key Mine Personnel', 'Project Timeline']
        },
        {
            name: 'Pipelines',
            id: 'pipelines',
            defaultSelected: 'Water Supply & Pipelines',
            services: ['Research Package', 'Water Supply & Pipelines', 'Key Mine Personnel', 'Project Timeline']
        },
        {
            name: 'Project Consulting',
            id: 'projectConsulting',
            defaultSelected: 'Project Costs & Returns',
            services: ['Research Package', 'Key Mine Personnel', 'Production Costs', 'Project Costs & Returns', 'Mining Contracts']
        },
        {
            name: 'Lodging',
            id: 'lodging',
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
        .description = `<ul>
        <li>Search by Name, Location, Mine Type, Development Stage, Deposit Type, Commodity</li>
        <li>Mine Owners - direct and indirect (via JV or subsidiary)</li>
        <li>Office Address and Phone number</li>
        <li>Deposit Type and Geology</li>
        <li>Reserves and Resources</li>
        <li>Commodity Production</li>
        <li>Commodity Production</li>
        <li>Mine Financials</li>
        <li>Corporate Filings</li>
    </ul>`;
    findServiceByName(store.allServices, 'Mining Operations')
        .description = `<ul>
        <li>Mining Methods and Technologies</li>
        <li>Mining Scale, tpd</li>
        <li>Material Mined and Milled</li>
        <li>Mining and Milling Capacity and Rate</li>
        <li>Hoist Shaft Depth</li>
        <li>Backfill Type</li>
        <li>Mine Financials</li>
        <li>Corporate Filings</li>
        <li>Search by Mining Methods and Backfill Types</li>
    </ul>`;
    findServiceByName(store.allServices, 'Key Mine Personnel')
        .description = `<ul><li>8,000 decision makers and consultants</li><li>General and Engineering Managers</li><li>Mine and Operation Managers</li><li>Mine and Plant Maintenance Managers</li><li>Processing Managers</li><li>Procurement Staff and more…</li><li>Search by job category, job title, consulting company</li></ul>`;
    findServiceByName(store.allServices, 'Mining Contracts')
        .description = `<ul><li>1,000 mines and projects with awarded and unawarded contracts</li><li>General and Engineering Managers</li><li>Contract Type (e.g. EPCM, mining, hauling, etc.)</li><li>Contract duration</li></ul>`;
    findServiceByName(store.allServices, 'Project Timeline')
        .description = `<ul><li>Current Development Stage</li><li>Construction start date</li><li>Production start date</li></ul>`;
    findServiceByName(store.allServices, 'Crushing & Grinding')
        .description = `<ul><li>1,200 mines and projects with crushers and mills data</li><li>Comminution summary</li><li>Mill size, model, installed power</li><li>Comminution Flowsheet Diagrams</li><li>Search by Crushers and Mills Type and Model</li></ul>`;
    findServiceByName(store.allServices, 'Mineral Processing')
        .description = `<ul><li>120 Processing Technologies</li><li>Mineral Processing Summary</li><li>Reagents</li><li>Recovery Rates</li><li>Flowsheet Diagrams</li></ul>`;
    findServiceByName(store.allServices, 'Water Supply & Pipelines')
        .description = `<ul><li>120 Processing Technologies</li><li>Mineral Processing Summary</li><li>Reagents</li><li>Recovery Rates</li><li>Flowsheet Diagrams</li></ul>`;
    findServiceByName(store.allServices, 'Heavy Mobile Equipment Conveyors')
        .description = `<ul><li>1,400 mines and projects with HME fleet data</li><li>2,000 models</li><li>62,000 units</li><li>Electric trucks and shovels</li><li>Autonomous trucks and drills</li><li>Search equipment by Type and Model</li></ul>`;
    findServiceByName(store.allServices, 'Production Costs')
        .description = `<ul><li>1,100 mines and projects with reported production costs</li><li>Cash Costs</li><li>Total Cash Costs</li><li>AISC</li><li>All-in Costs</li><li>Mine &amp; Mill Operating Costs ($/t mined or milled)</li></ul>`;
    findServiceByName(store.allServices, 'Project Costs & Returns')
        .description = `<ul><li>600 projects at PEA, PFS and FS stages</li><li>CapEx</li><li>OpEx</li><li>Revenue</li><li>Cash Flow</li><li>Net Present Value (NPV)</li><li>Interntal Rate of Return (IRR)</li></ul>`;
    findServiceByName(store.allServices, 'Remote Camps')
        .description = `<ul><li>460 mines and projects with remote camps</li><li>Camp size (e.g. person, beds or rooms)</li></ul>`;
    findServiceByName(store.allServices, 'Mapper & Coordinates')
        .description = `<ul><li>Plot search results on Google Map</li><li>Measure distance to infrastructure</li><li>Download Coordinates</li></ul>`;
}