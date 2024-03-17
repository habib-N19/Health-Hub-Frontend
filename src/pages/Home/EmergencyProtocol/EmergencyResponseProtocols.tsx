import { Timeline } from 'antd';


const EmergencyResponseProtocols = () => {
    const emergencyResponseProtocols = [
        {
            label: "Assessment of Needs",
            children: "Our team conducts thorough assessments to identify the needs of affected communities, including medical, shelter, and food requirements.",
        },
        {
            label: "Coordination with Authorities",
            children: "We collaborate closely with local authorities, government agencies, and other organizations to ensure a coordinated and efficient response.",
        },
        {
            dot: true,
            label: "Resource Mobilization",
            children: "We mobilize necessary resources, including medical supplies, personnel, and transportation, to respond effectively to the emergency situation.",
        },
        {
            label: "Community Aid Delivery",
            children: "We deliver aid directly to affected communities, providing medical assistance, shelter support, and other essential services as needed.",
        }
    ];

    return (
        <div style={{ maxWidth: '1200px', width: '90vw', margin: '0 auto', paddingTop: '60px' }}>
            <h1>Emergency Response Protocols</h1>
            <Timeline
                mode='alternate'
                items={emergencyResponseProtocols}
            />
        </div>
    );
};

export default EmergencyResponseProtocols;