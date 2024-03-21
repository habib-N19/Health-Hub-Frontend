import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import './topProvider.css';
import { Card, Typography } from "antd";
import { useTopProvidersQuery } from "../../../redux/features/homepageData/homePageDataApi";
const { Text, Paragraph, Title } = Typography;


const TopProvidersCard = () => {
    const [page, setPage] = useState(0);
    const { data: donorData, isLoading } = useTopProvidersQuery({});
    if (isLoading) return <div>Loading...</div>


    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const swipeConfidenceThreshold = 1000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setPage(page + newDirection);
    };

    const currentDonor = donorData[page % donorData.length];

    return (
        <>
            <AnimatePresence initial={false} custom={page}>
                <motion.div
                    key={page}
                    className='topProviderContainer'
                    custom={page}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(_e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    style={{ overflow: 'hidden', backgroundColor: 'white' }}
                >
                    <Card className='topProviderCard' style={{ width: '100%', backgroundColor: 'transparent', backdropFilter: 'blur(50px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%', margin: '0 auto', alignItems: 'center' }}>
                            <div style={{ maxWidth: '50%', objectFit: 'cover' }} className='topProviderImageContainer'>
                                <img style={{ maxWidth: '100%', objectFit: 'cover', height: '200px' }} src={currentDonor.imgUrl} alt="Donor" className='topProviderImage' />
                            </div>
                            <div className='topProviderContent'>
                                <Text strong>Name:
                                    <Title level={3}>{currentDonor.name}</Title>
                                </Text>
                                <Text strong>Amount Donated:</Text>
                                <Paragraph strong>${currentDonor.amount}</Paragraph>
                                <Paragraph strong >"{currentDonor.quote}"</Paragraph>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
        </>
    );
};

export default TopProvidersCard;