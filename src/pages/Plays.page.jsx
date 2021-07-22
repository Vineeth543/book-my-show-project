import React from "react";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import Poster from "../components/Poster/Poster.component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold pl-3">Plays in Bengaluru</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                  title="Admission - 31st July (Saturday)"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309176-acvpbmcyev-portrait.jpg"
                  title="`Sri Venkateswara Udbhavam` Surabhi Theatre Play"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311043-krdlmqnaev-portrait.jpg"
                  title="Ellamae Thamash Than"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311719-mqxdbttkdc-portrait.jpg"
                  title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309050-fsgpqjlfhw-portrait.jpg"
                  title="`BHAKTHA PRAHLADA` Surabhi Theatre Play"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312471-fxjdfruzje-portrait.jpg"
                  title="Tvk Cultural presents Ponniyin Selvan"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309124-kfppeantkb-portrait.jpg"
                  title="`JAI PATHALA BHAIRAVI` Surabhi Theatre Play"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309034-uvbesymhzf-portrait.jpg"
                  title="`BALANAGAMMA` Surabhi Theatre Play"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
                  title="Crazy Thieves in Palavakkam"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/12">
            <h2 className="text-3xl font-bold">Filters</h2>
            <PlaysFilter
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
            <PlaysFilter
              title="Language"
              tags={["Tamil", "Telugu", "English"]}
            />
            <PlaysFilter title="Categories" tags={["Theatre"]} />
            <PlaysFilter
              title="Genres"
              tags={[
                "Drama",
                "Adaptation",
                "Comedy",
                "Historical",
                "Mythological",
                "Online Streaming Plays",
              ]}
            />
            <PlaysFilter
              title="More Filters"
              tags={["Online Streaming", "Kids Allowed"]}
            />
            <PlaysFilter
              title="Preice"
              tags={["Free", "0 - 500", "501 - 2000", "Above 2000"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
