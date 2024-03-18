import { Resource } from "./DisasterPreparednessProtocols";

type DisasterPreparednessProps = {
    category: string,
    resources: Resource


}
const DisasterPreparednessCard = ({ category, resources }: DisasterPreparednessProps) => {
    return (
        <div style={{ boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', padding: '16px', marginTop: '18px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', textAlign: 'center' }}>{category}</h3>
            <ul>

                {
                    resources.map((resource, index) => {
                        return <div key={index}>
                            <li style={{ fontWeight: 'bold', listStyle: 'inside', listStyleType: 'none', marginTop: '10px' }}>{resource.title}</li>
                            <p style={{ fontWeight: 'lighter', fontSize: '14px' }}>{resource.description}</p>
                        </div>
                    })
                }
            </ul>

        </div>
    );
};

export default DisasterPreparednessCard;