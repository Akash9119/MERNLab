import React from 'react'
import Card from './components/Card/Index'

const users = [
  {
    id: 1,
    userName: "John Doe",
    userDesignation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 2,
    userName: "Sarah Wilson",
    userDesignation: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 3,
    userName: "Michael Brown",
    userDesignation: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 4,
    userName: "Emily Davis",
    userDesignation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 5,
    userName: "David Lee",
    userDesignation: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 6,
    userName: "Sophia Taylor",
    userDesignation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 7,
    userName: "James Anderson",
    userDesignation: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 8,
    userName: "Olivia Martinez",
    userDesignation: "Mobile App Developer",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 9,
    userName: "Daniel Harris",
    userDesignation: "Cyber Security Analyst",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
  {
    id: 10,
    userName: "Emma Clark",
    userDesignation: "Cloud Architect",
    image:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=600&auto=format&fit=crop&q=60",
    website: "#",
    twitter: "#",
    portfolio: "#",
  },
];

const App = () => {
  return (
    <div className="app">
      {
        users.map((user) => (
          <div key={user.id}>
            <Card userName={user.userName} userDesignation={user.userDesignation} image={user.image} website={user.website} twitter={user.twitter} portfolio={user.portfolio} />
          </div>
        ))
      }
    </div>
  )
}

export default App