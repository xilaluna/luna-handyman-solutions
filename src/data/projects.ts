import aduFremont from "../assets/images/adu-fremont.jpeg";
import aduRichmondElectrical from "../assets/images/adu-richmond-electrical.jpeg";
import aduRichmond from "../assets/images/adu-richmond.jpeg";
import drivewayRepair from "../assets/images/driveway-repair.jpg";
import kitchenBathRemodel from "../assets/images/kitchen-bathroom-remodel-1.jpg";
import kitchenBathRemodelAlt1 from "../assets/images/kitchen-bathroom-remodel-2.jpg";
import kitchenBathRemodelAlt2 from "../assets/images/kitchen-bathroom-remodel-3.jpg";
import stairRepair from "../assets/images/stair-repair.jpg";
import winterization from "../assets/images/winterization.jpg";

export const projects = [
  {
    title: "ADU Richmond",
    description:
      "Full ADU improvement project including interior plumbing, electrical upgrades, drywall installation, carpentry work, cabinet setting, tile installation, and concrete work. This project delivered a fully finished, functional living space.",
    image: aduRichmond,
    location: "Richmond, CA",
    timeline: "12 weeks",
    scope: "ADU build-out",
    status: "Completed",
    services: ["Plumbing", "Carpentry", "Electrical", "Drywall", "Painting", "Cabinets", "Tile", "Concrete"],
    photos: [aduRichmond, aduRichmondElectrical],
  },
  {
    title: "Driveway Repair",
    description:
      "Existing damaged driveway was demolished and regraded for proper drainage and slope. Rebar reinforcement was installed and a new concrete slab was poured to create a durable, long-lasting driveway surface.",
    image: drivewayRepair,
    location: "San Francisco, CA",
    timeline: "2 weeks",
    scope: "Concrete & drainage",
    status: "Completed",
    services: ["Demolition", "Regrading", "Backfill", "Rebar Installation", "Concrete Pouring"],
    photos: [drivewayRepair],
  },
  {
    title: "ADU Fremont",
    description:
      "Complete ADU build-out including structural framing, new plumbing and electrical systems, insulation, drywall installation, interior painting, and full tilework. Project transformed an unfinished space into a fully functional accessory dwelling unit.",
    image: aduFremont,
    location: "Fremont, CA",
    timeline: "14 weeks",
    scope: "ADU build-out",
    status: "Completed",
    services: ["Demolition", "Concrete", "Plumbing", "Framing", "Carpentry", "Electrical", "Insulation", "Drywall", "Painting", "Tilework"],
    photos: [aduFremont],
  },
  {
    title: "Winterization",
    description:
      "Home prepared for winter by insulating and securing pipes, shutting down exterior water lines, performing plumbing checks, and conducting a full pressure test to ensure the system was protected from freeze damage.",
    image: winterization,
    location: "Martinez, CA",
    timeline: "1 week",
    scope: "Seasonal prep",
    status: "Completed",
    services: ["Winterization", "Plumbing", "Pressure Testing"],
    photos: [winterization],
  },
  {
    title: "Kitchen & Bathroom Remodel",
    description:
      "Interior remodeling project that included upgrades to kitchen and bathroom spaces, electrical improvements, painting, fixture installations, and overall modernization to improve style and functionality.",
    image: kitchenBathRemodel,
    location: "San Jose, CA",
    timeline: "8 weeks",
    scope: "Interior remodel",
    status: "Completed",
    services: ["Electrical", "Painting", "Bathroom Remodel", "Kitchen Remodel"],
    photos: [kitchenBathRemodel, kitchenBathRemodelAlt1, kitchenBathRemodelAlt2],
  },
  {
    title: "Entryway & Main Stairs Repair",
    description:
      "Structural repair of the main entryway and stairs including dry rot removal, framing reinforcement, concrete patching, waterproofing, stucco restoration, and final painting. Work restored safety and curb appeal.",
    image: stairRepair,
    location: "San Francisco, CA",
    timeline: "3 weeks",
    scope: "Structural repair",
    status: "Completed",
    services: ["Dry Rot Repair & Wood Replacement", "Retrofitting", "Concrete Work", "Waterproofing", "Stucco Work", "Painting"],
    photos: [stairRepair],
  },
];
