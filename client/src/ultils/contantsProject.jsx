import carrent from '../assets/carrent.png'
import jobit from '../assets/jobit.png'
import tripguide from '../assets/tripguide.png'
import icons from './icons'

const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];



  const {BsShieldCheck,BsTruck,BiGift,FaTty}=icons
  const productExtraInfomation=[
    {
      id:1,
      title:'Guarantee',
      sub:'Quanlity Checked',
      icon:<BsShieldCheck/>
    },
    {
      id:2,
      title:'Free Shipping',
      sub:'Free On All Products',
      icon:<BsTruck/>
    },
    {
      id:3,
      title:'Special Gift Cards',
      sub:'Speacial Gitf Cards',
      icon:<BiGift/>
    },
    {
      id:4,
      title:'Free Return',
      sub:'Within 7 Days',
      icon:<FaTty/>
    },
  ]


const productDesTab=[
  {
    id:1,
    name:'DISCRIPTION',
    content:`Dimensions: 139mm x 288mm x 21mm
    Weight: 312 g
    36-month battery life
    Adjustable keyboard height
    Spill-resistant design
    2.4GHz wireless (10 meters)
    Nano USB receiver
    3-year Limited hardware warranty`,
  },
  {
    id:2,
    name:'WARRANTY',
    content:`
    WARRANTY INFORMATION
    LIMITED WARRANTIES
    Limited Warranties are non-transferable. The following Limited Warranties are given to the original retail purchaser of the following Ashley Furniture Industries, Inc.Products: 
    Frames Used In Upholstered and Leather Products
    Limited Lifetime Warranty
    A Limited Lifetime Warranty applies to all frames used in sofas, couches, love seats, upholstered chairs, ottomans, sectionals, and sleepers. Ashley Furniture Industries,Inc. warrants these components to you, the original retail purchaser, to be free from material manufacturing defects.
    `
  },
  {
    id:3,
    name:'DELIVERY',
    content:`
    PURCHASING & DELIVERY
    Before you make your purchase, it’s helpful to know the measurements of the area you plan to place the furniture. You should also measure any doorways and hallways through which the furniture will pass to get to its final destination.
    Picking up at the store
    Shopify Shop requires that all products are properly inspected BEFORE you take it home to insure there are no surprises. Our team is happy to open all packages and will assist in the inspection process. We will then reseal packages for safe transport. We encourage all customers to bring furniture pads or blankets to protect the items during transport as well as rope or tie downs. Shopify Shop will not be responsible for damage that occurs after leaving the store or during transit. It is the purchaser’s responsibility to make sure the correct items are picked up and in good condition.
    Delivery
    Customers are able to pick the next available delivery day that best fits their schedule. However, to route stops as efficiently as possible, Shopify Shop will provide the time frame. Customers will not be able to choose a time. You will be notified in advance of your scheduled time frame. Please make sure that a responsible adult (18 years or older) will be home at that time.
    In preparation for your delivery, please remove existing furniture, pictures, mirrors, accessories, etc. to prevent damages. Also insure that the area where you would like your furniture placed is clear of any old furniture and any other items that may obstruct the passageway of the delivery team. Shopify Shop will deliver, assemble, and set-up your new furniture purchase and remove all packing materials from your home. Our delivery crews are not permitted to move your existing furniture or other household items. Delivery personnel will attempt to deliver the purchased items in a safe and controlled manner but will not attempt to place furniture if they feel it will result in damage to the product or your home. Delivery personnel are unable to remove doors, hoist furniture or carry furniture up more than 3 flights of stairs. An elevator must be available for deliveries to the 4th floor and above.
    `
  },
  {
    id:4,
    name:'PAYMENT',
    content: `
    PURCHASING & DELIVERY
    Before you make your purchase, it’s helpful to know the measurements of the area you plan to place the furniture. You should also measure any doorways and hallways through which the furniture will pass to get to its final destination.
    Picking up at the store
    Shopify Shop requires that all products are properly inspected BEFORE you take it home to insure there are no surprises. Our team is happy to open all packages and will assist in the inspection process. We will then reseal packages for safe transport. We encourage all customers to bring furniture pads or blankets to protect the items during transport as well as rope or tie downs. Shopify Shop will not be responsible for damage that occurs after leaving the store or during transit. It is the purchaser’s responsibility to make sure the correct items are picked up and in good condition.
    Delivery
    Customers are able to pick the next available delivery day that best fits their schedule. However, to route stops as efficiently as possible, Shopify Shop will provide the time frame. Customers will not be able to choose a time. You will be notified in advance of your scheduled time frame. Please make sure that a responsible adult (18 years or older) will be home at that time.
    In preparation for your delivery, please remove existing furniture, pictures, mirrors, accessories, etc. to prevent damages. Also insure that the area where you would like your furniture placed is clear of any old furniture and any other items that may obstruct the passageway of the delivery team. Shopify Shop will deliver, assemble, and set-up your new furniture purchase and remove all packing materials from your home. Our delivery crews are not permitted to move your existing furniture or other household items. Delivery personnel will attempt to deliver the purchased items in a safe and controlled manner but will not attempt to place furniture if they feel it will result in damage to the product or your home. Delivery personnel are unable to remove doors, hoist furniture or carry furniture up more than 3 flights of stairs. An elevator must be available for deliveries to the 4th floor and above.
    `
  },
  
]


const sorts=[
  {
    id:1,
    value:'-sold',
    text:'Best selling'
  },
  {
    id:2,
    value:'-title',
    text:'Alphabetically, A-Z'
  },
  {
    id:3,
    value:'-title',
    text:'Alphabetically, Z-A'
  },
  {
    id:4,
    value:'-price',
    text:'Price, low to hight'
  },
  {
    id:5,
    value:'-price',
    text:'Price, high to low'
  },
  {
    id:6,
    value:'-createdAt',
    text:'Date, new'
  },
  {
    id:7,
    value:'-createdAt',
    text:'Price, old'
  }
]

const voteOptions=[
  {
    id:1,
    text:'Terrible',
  },
  {
    id:2,
    text:'Bad',
  },
  {
    id:3,
    text:'Neutral',
  },
  {
    id:4,
    text:'Good',
  },
  {
    id:5,
    text:'Perfect',
  },
]
export { projects ,productExtraInfomation,productDesTab,sorts,voteOptions};