import Carousel from "./Carousel";

function Home() {
    return (
        <div className="p-8">
            <div className="bg-[--secondaryColor] border rounded-md p-2">
                <p className="mb-3 text-gray-500">Welcome to recipebook.io! we are your digital companion in the culinary world, an online space designed for you to discover, save, and share your favorite recipes. Our platform is dedicated to all food enthusiasts, from beginners to experts, and we're here to inspire you at every step of your culinary journey.</p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <p className="mb-3 text-gray-500">At recipebook.io, we provide you with the perfect tool to create your own online recipe collection. Found a recipe that makes your mouth water? Save it to your personalized recipe collection for easy access anytime. Organize your recipes into categories and tags for a perfectly tailored culinary experience.</p>
                    <p className="mb-3 text-gray-500">We want to witness your kitchen triumphs. Share your own original recipes on recipebook.io and let other food enthusiasts discover and be inspired by your creations. Whether it's a family recipe passed down through generations or a recent invention, your contribution will enrich our culinary community.</p>
                </div>
                <p className="mb-3 text-gray-500">Join us at recipebook.io and start exploring, saving, and sharing recipes that will delight your senses and inspire you in every culinary adventure. Your online recipe collection awaits, ready to be filled with your most delicious creations.</p>


                <p className="text-gray-500">At recipebook.io, we strive to offer you a reliable and authentic experience. All recipes shared on our platform are reviewed to ensure quality and accuracy. We value your safety and privacy and are committed to providing you with a positive and enriching online space.</p>

                
                <hr className="w-48 h-1 mx-auto my-4 bg-[--highlights] border-0 rounded md:my-10" />
                <p className="text-gray-500">At recipebook.io, we believe that cooking is more than just a task; it's an art form that connects us on emotional and cultural levels. Our mission is to provide you with a place where you can explore a wide variety of recipes, from comforting classics to the most innovative creations, and where you can share your own culinary creations with the community.</p>

                <div className="py-8">
                 <Carousel />   
                </div>
            </div>
        </div>
    );
}

export default Home;



