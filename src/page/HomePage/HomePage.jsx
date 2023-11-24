import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [uniqueStates, setUniqueStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/public/data.json");
      const result = await response.json();
      setData(result);

      // Extract unique states from the data
      const states = [...new Set(result.map((item) => item.state))];
      setUniqueStates(states);
    };

    fetchData();
  }, []);
  console.log(uniqueStates);
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold text-center">All Restaurants Detail</h1>

      <div className="flex justify-center">
        <div className="stats">
          <div className="stat">
            <div className="stat-title">Total Restaurants</div>
            <CountUp
              delay={1}
              end={data.length}
              className="stat-value text-center"
            />
          </div>
        </div>
      </div>

      {/* Restaurants Categories */}
      <div className="mt-10 w-9/12 mx-auto">
        <div role="tablist" className="tabs tabs-lifted">
          {uniqueStates.map((state) => (
            <React.Fragment key={state}>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label={state}
                checked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <h1 className="text-5xl mb-3 font-semibold">{state}</h1>
                <div className="grid grid-cols-4 gap-3">
                  {data
                    .filter((item) => item.state === state)
                    .map((item, index) => (
                      <>
                        <div
                          key={index}
                          className="card bg-base-100 shadow-2xl text-center skeleton"
                        >
                          <div className="card-body ">
                            <h2 className="font-bold text-xl">
                              {item.restaurant_name}
                            </h2>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
