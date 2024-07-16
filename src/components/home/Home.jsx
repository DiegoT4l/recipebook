import Carousel from "./Carousel";

function Home() {
    return (
        <div className="p-8">
            <div className="bg-[--secondaryColor] border rounded-md p-2">
                <p class="mb-3 text-gray-500">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <p class="mb-3 text-gray-500">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    <p class="mb-3 text-gray-500">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                </div>
                <p class="mb-3 text-gray-500">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>


                <p class="text-gray-500">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />
                <p class="text-gray-500">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>

                <div className="py-8">
                 <Carousel />   
                </div>
            </div>
        </div>
    );
}

export default Home;



