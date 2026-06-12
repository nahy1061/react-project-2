import React from "react";
import Section1 from "./components/Section1/Section1";

const App = () => {

  const users =[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut necessitatibus aperiam cum. Eum quidem itaque vero veniam aliquam.', 
      tag:'Satisfied' 
    },
    {
      img:'https://images.unsplash.com/photo-1684327596702-6bbbe1422375?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi quod iste, ratione provident exercitationem tenetur dolores?', 
      tag:'Underserved' 
    },
    {
      img:'https://images.unsplash.com/photo-1773332598501-f8612761781a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure esse consectetur corporis? Ut, aut deserunt.', 
      tag:'Underbanked' 
    },
     {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi quod iste, ratione provident exercitationem tenetur dolores?', 
      tag:'Understaffed' 
    },
     {
      img:'https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi quod iste, ratione provident exercitationem tenetur dolores?', 
      tag:'Average' 
    }
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
