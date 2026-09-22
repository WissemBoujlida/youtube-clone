"use client";

import { InfiniteScroll } from "@/components/infinite-scroll";
import { useState } from "react";

export function VideosSection() {
  const [data, setData] = useState([
    {
      id: 1,
      first_name: "Quinn",
      last_name: "Furzey",
      email: "qfurzey0@etsy.com",
      gender: "Male",
      title: "Dr",
      company: "Tazz",
      phone: "388-207-6222",
      address: "19 Lakeland Lane",
    },
    {
      id: 2,
      first_name: "Lynn",
      last_name: "Headford",
      email: "lheadford1@mtv.com",
      gender: "Female",
      title: "Mrs",
      company: "Jaloo",
      phone: "937-209-4229",
      address: "808 Logan Street",
    },
    {
      id: 3,
      first_name: "Thorny",
      last_name: "Poulgreen",
      email: "tpoulgreen2@ebay.com",
      gender: "Male",
      title: "Mr",
      company: "Realmix",
      phone: "222-126-2666",
      address: "08536 Coleman Street",
    },
    {
      id: 4,
      first_name: "Stavro",
      last_name: "Sperwell",
      email: "ssperwell3@icq.com",
      gender: "Male",
      title: "Mrs",
      company: "Zooxo",
      phone: "949-120-3145",
      address: "93082 Cascade Way",
    },
    {
      id: 5,
      first_name: "Laurent",
      last_name: "Jeyes",
      email: "ljeyes4@economist.com",
      gender: "Male",
      title: "Mr",
      company: "Twinder",
      phone: "889-228-4912",
      address: "739 Kingsford Road",
    },
    {
      id: 6,
      first_name: "Barr",
      last_name: "Yockley",
      email: "byockley5@europa.eu",
      gender: "Male",
      title: "Mrs",
      company: "Voonder",
      phone: "418-294-3427",
      address: "2 Menomonie Crossing",
    },
    {
      id: 7,
      first_name: "Crysta",
      last_name: "Fourmy",
      email: "cfourmy6@google.com.br",
      gender: "Female",
      title: "Mr",
      company: "Edgeclub",
      phone: "698-340-7064",
      address: "114 Claremont Parkway",
    },
    {
      id: 8,
      first_name: "Any",
      last_name: "Orpyne",
      email: "aorpyne7@phoca.cz",
      gender: "Male",
      title: "Mr",
      company: "Zoomdog",
      phone: "439-431-8115",
      address: "61520 Marcy Center",
    },
    {
      id: 9,
      first_name: "Clyde",
      last_name: "Biffen",
      email: "cbiffen8@vkontakte.ru",
      gender: "Male",
      title: "Dr",
      company: "Shufflebeat",
      phone: "492-471-0932",
      address: "9 Waubesa Place",
    },
    {
      id: 10,
      first_name: "Zeb",
      last_name: "Phibb",
      email: "zphibb9@linkedin.com",
      gender: "Male",
      title: "Ms",
      company: "Bluezoom",
      phone: "598-593-9694",
      address: "2776 Eagan Trail",
    },
    {
      id: 11,
      first_name: "Heddi",
      last_name: "Cullagh",
      email: "hcullagha@behance.net",
      gender: "Female",
      title: "Dr",
      company: "Eadel",
      phone: "313-411-5798",
      address: "056 Mcguire Junction",
    },
    {
      id: 12,
      first_name: "Phyllida",
      last_name: "Casbolt",
      email: "pcasboltb@cam.ac.uk",
      gender: "Female",
      title: "Rev",
      company: "Fadeo",
      phone: "758-595-1016",
      address: "7 Waubesa Terrace",
    },
    {
      id: 13,
      first_name: "Harland",
      last_name: "Novelli",
      email: "hnovellic@guardian.co.uk",
      gender: "Male",
      title: "Mrs",
      company: "Edgewire",
      phone: "983-496-4545",
      address: "449 Old Gate Alley",
    },
    {
      id: 14,
      first_name: "Etti",
      last_name: "Sivell",
      email: "esivelld@merriam-webster.com",
      gender: "Female",
      title: "Mr",
      company: "Mydeo",
      phone: "974-663-3665",
      address: "393 Hooker Hill",
    },
    {
      id: 15,
      first_name: "David",
      last_name: "Swayte",
      email: "dswaytee@nsw.gov.au",
      gender: "Male",
      title: "Ms",
      company: "Skyba",
      phone: "229-591-4077",
      address: "8 Ryan Alley",
    },
  ]);

  return (
    <div>
      {JSON.stringify(data)}

      <InfiniteScroll
        isManual={true}
        hasNextPage={true}
        isFetchingNextPage={false}
        fetchNextPage={() => {
          setData((prev) => [
            ...prev,
            {
              id: 0,
              first_name: "Wissem",
              last_name: "Boujlida",
              email: "wissem@email.com",
              gender: "Male",
              title: "Ms",
              company: "X",
              phone: "229-591-4077",
              address: "8 Ryan Alley",
            },

            {
              id: 16,
              first_name: "John",
              last_name: "Doe",
              email: "john@doe.com",
              gender: "Male",
              title: "Ms",
              company: "X",
              phone: "229-591-4077",
              address: "8 Ryan Alley",
            },
          ]);
        }}
      />
    </div>
  );
}
