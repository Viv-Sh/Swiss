import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function SwitzerlandTravelGuide() {
  const destinations = [
    {
      name: "Zurich",
      description:
        "Zurich is Switzerland’s financial capital and a cultural melting pot. Visit the historic Old Town, cruise along Lake Zurich, and embrace Swiss craftsmanship in every bite of chocolate and every tick of a luxury watch.",
      activities: [
        {
          title: "Lindt Home of Chocolate",
          location: "Seestrasse 204, Kilchberg",
          detail:
            "Explore interactive chocolate exhibits, see the world's largest chocolate fountain, and enjoy unlimited tasting experiences in this immersive chocolate museum."
        },
        {
          title: "Bahnhofstrasse Shopping Street",
          location: "Zurich City Center",
          detail:
            "This iconic boulevard is perfect for luxury shopping, stylish boutiques, and world-renowned Swiss watches."
        },
        {
          title: "Lake Zurich Promenade",
          location: "From Burkliplatz to Zurichhorn",
          detail:
            "Take a scenic stroll along the lakeside promenade or enjoy a boat ride with views of the city and the Alps."
        }
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Z%C3%BCrich_-_Bahnhofstrasse_-_Limmatquai_-_Grossm%C3%BCnster_-_ETH_-_Uetliberg_-_Z%C3%BCrichberg_-_Z%C3%BCrichsee_IMG_3813.jpg"
    },
    {
      name: "Grindelwald",
      description:
        "Grindelwald, tucked beneath the north face of the Eiger, is a haven for nature lovers and adrenaline seekers alike. With majestic peaks and lush valleys, it offers year-round adventure and postcard-worthy scenery.",
      activities: [
        {
          title: "Grindelwald First – Adventure Park",
          location: "Bergstation Firstbahn",
          detail:
            "Enjoy cliff walks, thrilling zip lines, mountain carts, and stunning views of the Eiger from this popular alpine adventure zone."
        },
        {
          title: "Falcon Glider Zipline",
          location: "First Mountain Station",
          detail:
            "Experience the sensation of flying like a falcon as you glide face-first at high speed over alpine meadows and cliffs."
        }
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Grindelwald%2C_Switzerland.jpg"
    },
    {
      name: "Interlaken",
      description:
        "Interlaken, sandwiched between Lake Thun and Lake Brienz, is the gateway to the Jungfrau region. It's a paradise for hikers, thrill-seekers, and those looking to explore Swiss nature at its finest.",
      activities: [
        {
          title: "Trümmelbach Falls",
          location: "Lauterbrunnen Valley",
          detail:
            "Marvel at ten glacial waterfalls thundering inside a mountain. These powerful streams are accessible via tunnels, lifts, and walkways."
        },
        {
          title: "Harderbahn Train",
          location: "Harderbahn Station, Interlaken",
          detail:
            "Ride the funicular railway to Harder Kulm, Interlaken's local mountain, for a panoramic platform and views of the Jungfrau trio."
        }
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Interlaken_view.jpg"
    },
    {
      name: "Glacier 3000",
      description:
        "Glacier 3000 offers a high-altitude adventure filled with snow, ice, and stunning alpine views. A year-round playground above the clouds.",
      activities: [
        {
          title: "Peak Walk by Tissot",
          location: "Glacier 3000 Summit Station",
          detail:
            "The world's first suspension bridge linking two mountain peaks – breathtaking, both for its engineering and scenery."
        },
        {
          title: "Rotating Cable Car",
          location: "Col du Pillon Base Station",
          detail:
            "Enjoy a 360° view of the Alps as you ascend to the glacier in this unique rotating gondola."
        },
        {
          title: "Alpine Coaster",
          location: "Glacier 3000 Park",
          detail:
            "Ride Europe’s highest alpine rollercoaster, a thrilling descent with twists and turns above the clouds."
        }
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Peak_Walk_by_Tissot.jpg"
    },
    {
      name: "Lucerne",
      description:
        "Lucerne enchants with its blend of medieval architecture, vibrant waterfronts, and breathtaking mountain views. It’s a city that captures Swiss charm in every corner.",
      activities: [
        {
          title: "Dying Lion Monument",
          location: "Löwenplatz, Lucerne",
          detail:
            "A moving rock carving of a wounded lion, honoring the Swiss Guards who died defending the French monarchy in 1792."
        },
        {
          title: "Chapel Bridge & Water Tower",
          location: "Lucerne Old Town",
          detail:
            "The most photographed monument in Switzerland, this covered wooden bridge dates back to the 14th century."
        },
        {
          title: "Lake Lucerne Cruise",
          location: "Lucerne Pier",
          detail:
            "Glide across the lake on a traditional paddle steamer with views of Mt. Pilatus and Mt. Rigi."
        }
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/L%C3%B6wendenkmal_Luzern.JPG"
    },
    {
      name: "Mount Titlis",
      description:
        "Mount Titlis, rising above Engelberg, is a world of perpetual snow and jaw-dropping alpine vistas. It’s a playground for winter lovers and thrill-seekers alike.",
      activities: [
        {
          title: "Cliff Walk",
          location: "Titlis Summit Station",
          detail:
            "Europe’s highest suspension bridge offers dramatic views and a true test of courage."
        },
        {
          title: "Snow Tubing & Snowboarding",
          location: "Titlis Glacier Park",
          detail:
            "Try snow tubing, sledding, and snowboarding in a dedicated snow park with family-friendly fun."
        },
        {
          title: "Rotair Cable Car",
          location: "Titlis Valley Station",
          detail:
            "The world's first rotating cable car that offers stunning panoramic views during your ascent."
        }
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Titlis_Cliff_Walk_Suspension_Bridge.jpg"
    }
  ];

  return (
    <div className="p-6 space-y-12 bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <h1 className="text-5xl font-extrabold text-center text-blue-700">🇨🇭 Discover Switzerland: Top Destinations & Adventures</h1>
      {destinations.map((place) => (
        <Card key={place.name} className="rounded-3xl shadow-2xl border border-blue-100">
          <CardContent className="p-6">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-72 object-cover rounded-2xl mb-5"
            />
            <h2 className="text-4xl font-bold text-blue-800 mb-3">{place.name}</h2>
            <p className="mb-6 text-lg text-gray-700">{place.description}</p>
            <ul className="space-y-4">
              {place.activities.map((act, index) => (
                <li key={index} className="border-l-4 pl-4 border-blue-500 bg-blue-50 rounded p-2">
                  <p className="font-semibold text-blue-900">{act.title}</p>
                  <p className="text-sm italic text-blue-700">📍 {act.location}</p>
                  <p className="text-sm text-gray-800">{act.detail}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
      <div className="text-center mt-16">
        <p className="text-2xl font-semibold text-blue-700">Your dream Swiss adventure awaits... 🌄</p>
        <Button className="mt-6 text-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow">Download Full Travel Guide</Button>
      </div>
    </div>
  );
}
