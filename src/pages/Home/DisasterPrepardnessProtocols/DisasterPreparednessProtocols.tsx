import { Col, Row } from 'antd';

import DisasterPreparednessCard from './DisasterPreparednessCard';
export type Resource = {
    title: string;
    description: string;
}[];

export type DisasterPreparednessResource = {
    category: string;
    resources: Resource;
};

const DisasterPreparednessProtocols = () => {
    const disasterPreparednessResources: DisasterPreparednessResource[] = [
        {
            category: "Emergency Kits",
            resources: [
                {
                    title: "Basic Emergency Kit",
                    description: "A list of essential items to include in your emergency kit, such as water, non-perishable food, flashlight, batteries, first aid supplies, and personal hygiene items."
                },
                {
                    title: "Go Bag Checklist",
                    description: "A checklist of items to pack in a 'go bag' for quick evacuation, including important documents, medication, clothing, and emergency contacts."
                },
            ]
        },
        {
            category: "Evacuation Plans",
            resources: [
                {
                    title: "Creating an Evacuation Plan",
                    description: "Step-by-step guide on how to develop and practice an evacuation plan for your household, including identifying evacuation routes, meeting points, and communication strategies."
                },
                {
                    title: "Evacuation Route Maps",
                    description: "Access to evacuation route maps for your area, highlighting primary and alternative routes to safety in the event of a disaster or emergency."
                },
            ]
        },
        {
            category: "Medical Supplies",
            resources: [
                {
                    title: "First Aid Kit Essentials",
                    description: "A comprehensive list of essential items to include in your first aid kit, such as bandages, antiseptic wipes, gauze pads, adhesive tape, scissors, and pain relievers."
                },
                {
                    title: "Medication Management Tips",
                    description: "Tips and guidelines for managing medication during emergencies, including proper storage, rotation, and access to prescriptions during evacuation."
                },
            ]
        },
        {
            category: "Training Programs",
            resources: [
                {
                    title: "Disaster Preparedness Training",
                    description: "Information on disaster preparedness training programs available in your area, including online courses, workshops, and community seminars."
                },
                {
                    title: "CPR and First Aid Certification",
                    description: "Resources for obtaining CPR and first aid certification, including accredited training providers, course schedules, and certification renewal options."
                },
            ]
        }
    ];

    return (
        <div style={{ maxWidth: '1200px', width: '80vw', margin: '20px auto', }}>
            <h1 style={{ textAlign: 'center', margin: '40px 0', fontSize: '36px' }}>Disaster Preparedness Resources</h1>
            {/* add a horizontral bar */}

            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '18px' }}>Explore valuable resources and tips for disaster preparedness to help communities better withstand and recover from disasters. Take proactive measures to mitigate the impact of emergencies.</p>
            <Row style={{ margin: 0, }} gutter={16}>
                {
                    disasterPreparednessResources.map((resource: DisasterPreparednessResource, index: number) => (
                        <Col key={index} span={12}>
                            <DisasterPreparednessCard category={resource.category} resources={resource.resources} />
                        </Col>
                    ))
                }

            </Row>
        </div>
    );
};

export default DisasterPreparednessProtocols;