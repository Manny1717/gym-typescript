import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from '../shared/types';
import {motion} from 'framer-motion';
import Htext from '../shared/Htext';
import Benefit from "./Benefit";
import ActionButton from '../shared/ActionButton';
import BenefitsPageGraphic from '../assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: 'eradvfskl refsac feacs mnmer resd. sdvoilnkj gresd weoiu in a in ervsd.'
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: 'eradvfskl refsac feacs mnmer resd. sdvoilnkj gresd weoiu in a in ervsd.'
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: 'eradvfskl refsac feacs mnmer resd. sdvoilnkj gresd weoiu in a in ervsd.'
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/*HEADER*/}
            <div className="md:my-5 md:w-3/5">
                <Htext>More Than Just A GYM.</Htext>
                <p className="my-5 text-sm">We provide world class fitness equipment, trainers, and classes to get you to your
                    ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </div>

            {/*BENEFITS*/}
            <div className="md:flex items-center justify-between gap-8 mt-5">
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </div>
            </motion.div>

            {/*GRAPHICS & DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/*GRAPHIC*/}
                <img className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
                />

                {/*DESCRIPTION*/}
                <div>
                    {/*TITLE*/}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div className="relative">
                            <Htext>
                                MILLIONS OF HAPPY MEMBERS GETTING{' '}
                                <span className="text-primary-500">FIT</span>
                            </Htext>
                            </div>
                        </div>

                    </div>
                    {/*DESCRIPTION*/}
                    <div>
                        <p className="my-5">Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
                        </p>
                        <p className="mb-5">Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
                        </p>
                    </div>
                    {/*BUTTON*/}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
            </section>
  );
};
export default Benefits;