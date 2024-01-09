/* import React from 'react';
import flowers from'./flowers.jpg';
import './App.css';

function App() {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-blue-600" >About Me</h1>
      <p className="text-lg">
        Hello! I'm Adey, a passionate developer who loves building
        awesome web applications. 
       </p>
       <p>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
        It's fast, flexible, and reliable — with zero-runtime.</p>
      
    </div>
  );
}

export default App; */
import React from 'react';
import flowers from'./flowers.jpg';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <div className="flex items-center mb-8">
          <img src={flowers.png} alt="Flowers" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h2 className="text-2xl font-medium">Abebe</h2>
            <p className="text-gray-600">Farmer</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          Hello! I'm Abebe, a passionate farmer with over 10 years of experience in the agricultural industry.
          I specialize in organic farming methods, ensuring that the produce I grow is healthy and free from harmful chemicals.
          My love for nature and sustainable practices has led me to adopt eco-friendly farming techniques, such as crop rotation, natural pest control, and water conservation.
          I believe that by taking care of the environment, we can produce high-quality crops while preserving the land for future generations.
        </p>
      </div>
    </div>
  );
};

export default App;
