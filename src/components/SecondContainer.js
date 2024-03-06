import React, { useEffect, useState } from "react";
import Strategy from "../assets/Strategy.png";
import Online from "../assets/Online.png";
import Commerce from "../assets/Commerces.png";
import Aos from "aos";
import 'aos/dist/aos.css';

const SecondContainer = () => {

    useEffect(()=>{
        Aos.init()
    },[]);

  const tabs = [
    "strategy and consulting",
    "online marketing experiences",
    "commerce solutions",
    "growth marketing",
    "asset creation",
  ];

  const tabBgColors = {
    "strategy and consulting": "#bbafd7",
    "online marketing experiences": "#b4b0d7",
    "commerce solutions": "#b1b1d7",
    "growth marketing": "#9fa5d3",
    "asset creation": "#959ed1",
  };

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row" style={{backgroundColor: tabBgColors[activeTab]}}>
        <div className="w-full lg:w-4/12 py-8 lg:border-r-2">
          <div data-aos="fade-up" className="px-5 lg:mb-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTab(tab)}
                className={`block mb-6 text-lg lg:text-xl uppercase ${
                  activeTab === tab
                    ? "border-b-2 text-white"
                    : "text-[#ddd7eb] border-0"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>
          {activeTab === tabs[0] && (
            <div className="text-white p-8 w-full lg:w-3/4 border-t-2 border-l-2 border-b-2 flex flex-col justify-center ml-auto">
              <button className="bg-white text-black mb-4 rounded-md text-sm px-4 py-2">
                Layer-1 Strategic Process Steps
              </button>
              <button className="bg-transparent border-2 border-dashed border-white mb-4 rounded-md text-sm px-4 py-2">
                Layer-2 Inputs & Intel Undertaken
              </button>
              <button className="bg-[#c4bbdd] mb-4 rounded-md text-sm px-4 py-2">
                Layer-3 Strategic Output
              </button>
              <button className="bg-[#949ed1] mb-4 rounded-md text-sm px-4 py-2">
                Layer-4 Branding Headers
              </button>
              <button className="bg-[#aeaad5] rounded-md text-sm px-4 py-2">
                Layer-5 Branding Output
              </button>
            </div>
          )}
          {activeTab === tabs[1] && (
            <div className="text-white p-8 w-full lg:w-3/4 border-t-2 border-l-2 border-b-2 flex flex-col justify-center ml-auto">
              <button className="bg-white text-black mb-4 rounded-md text-sm px-4 py-2">
                Stage-1 Planning Message & Numbers
              </button>
              <button className="bg-[#949ed1] mb-4 rounded-md text-sm px-4 py-2">
                Stage-2 Strategic Touchpoints
              </button>
              <button className="bg-[#aaabd5] mb-4 rounded-md text-sm px-4 py-2">
                Stage-3 Execution Touchpoints
              </button>
              <button className="bg-[#bebcdd] mb-4 rounded-md text-sm px-4 py-2">
                Activity Breakdown/Suggestion
              </button>
            </div>
          )}
          {activeTab === tabs[2] && (
            <div className="text-white p-8 w-full lg:w-3/4 border-t-2 border-l-2 border-b-2 flex flex-col justify-center ml-auto">
              <button className="bg-white text-black mb-4 rounded-md text-sm px-4 py-2">
                Internal management of Tasks
              </button>
              <button className="bg-[#aeaad5] mb-4 rounded-md text-sm px-4 py-2">
                External Assistance & Partnerships
              </button>
              <button className="bg-transparent border-2 border-dashed border-white mb-4 rounded-md text-sm px-4 py-2">
                Output Expected
              </button>
              <button className="bg-[#949ed1] rounded-md text-sm px-4 py-2">
                Tooks & Softwares to Work With
              </button>
            </div>
          )}
          </div>
        </div>
        <div className="w-full lg:w-8/12 lg:p-10">
          {activeTab === tabs[0] && <img src={Strategy} className="w-full" />}
          {activeTab === tabs[1] && <img src={Online} className="w-full" />}
          {activeTab === tabs[2] && <img src={Commerce} className="w-full" />}
          {activeTab === tabs[3] && (
            <div className="w-full p-5 lg:py-14 bg-[#9fa5d3]">
              <h1 className="font-bold lg:text-4xl uppercase text-white">
                the hunt
              </h1>
              <p className="lg:mt-5 text-white lg:text-xl">
                Crafting Data-Informed Designs for Optimal Results.
                <br />
                <br /> At The Hunt, we combine the power of data with innovative
                design to create compelling marketing strategies that deliver
                results.
                <br />
                <br /> By analyzing user behavior and preferences, we craft
                designs that resonate with the target audience, leading to
                increased engagement and conversions. Our approach to
                data-informed design helps us identify opportunities for growth
                and improvement, allowing us to continuously optimize our
                strategies.
              </p>
              <button className="border-2 px-5 py-3 text-white mt-5 lg:mt-12">
                Learn More
              </button>
            </div>
          )}
          {activeTab === tabs[4] && (
            <div className="w-full p-5 lg:py-14 bg-[#959ed1]">
              <h1 className="font-bold lg:text-4xl uppercase text-white">
                the moon
              </h1>
              <p className="lg:mt-5 text-white lg:text-xl">
                Vision Meets Reality in Extraordinary Content Creation.<br/><br/> At The
                Moon, we craft exceptional assets that go beyond the ordinary,
                capture the imagination and inspire action.<br/><br/> By combining
                creativity, strategic thinking, and technical expertise, we
                create content that looks great and achieves your desired
                results. With a comprehensive video production process that
                covers everything from ideation to final delivery, we'll guide
                you every step of the way and ensure that your vision meets
                reality in the most unique way possible.
              </p>
              <button className="border-2 px-5 py-3 text-white mt-5 lg:mt-12">
                Learn More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SecondContainer;
