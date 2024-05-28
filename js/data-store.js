export let store = {
    targetSegments: [
        {name: 'Mining', id:'mining', services: ['Research Package', 'Mining Operations', 'Key Mine Personnel', 'Mining Contracts','Project Timeline',]},
        {name: 'Backfilling', id:'backfilling', services: ['Research Package', 'Mining Operations','Key Mine Personnel', 'Mining Contracts', 'Project Timeline']},
        {name: 'Mineral Processing', id:'mineralProcessing', services: ['Research Package', 'Mineral Processing', 'Key Mine Personnel','Project Timeline']},
        {name: 'Milling Equipment', id:'millingEquipment', services: ['Research Package', 'Crushing & Grinding', 'Key Mine Personnel', 'Project Timeline']},
        {name: 'Mobile Equipment', id:'mobileEquipment', services: ['Research Package', 'Crushing & Grinding', 'Heavy Mobile Equipment', 'Project Timeline']},
        {name: 'Conveyors', id:'conveyors', services: ['Research Package','Conveyors', 'Key Mine Personnel', 'Project Timeline']},
        {name: 'Pipelines', id:'pipelines', services: ['Research Package','Water Supply & Pipelines', 'Key Mine Personnel', 'Project Timeline']},
        {name: 'Project Consulting', id:'projectConsulting', services: ['Research Package', 'Key Mine Personnel', 'Production Costs', 'Project Costs & Returns', 'Mining Contracts ']},
        {name: 'Lodging', id:'lodging', services: ['Research Package','Remote Camps', 'Key Mine Personnel',]},
    ],

    allServices: [
        {name: 'Research Package',  price: 2000.00, description: ''},
        {name: 'Mining Operations', price: 100.00, description: ''},
        {name: 'Key Mine Personnel', price: 100.00, description: ''},
        {name: 'Mining Contracts', price: 100.00, description: ''},
        {name: 'Project Timeline', price: 100.00, description: ''},
        {name: 'Crushing & Grinding', price: 100.00, description: ''},
        {name: 'Mineral Processing', price: 100.00, description: ''},
        {name: 'Water Supply & Pipelines', price: 100.00, description: ''},
        {name: 'Heavy Mobile Equipment Conveyors', price: 100.00, description: ''},
        {name: 'Production Costs', price: 100.00, description: ''},
        {name: 'Project Costs & Returns', price: 100.00, description: ''},
        {name: 'Remote Camps', price: 100.00, description: ''},
        {name: 'Mapper & Coordinates', price: 100.00, description: ''},
    ]
};