

const Fqu = () => {
    return (
        <div>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    How do I enroll in courses on your website?
                    </div>
                    <div className="collapse-content">
                        <p> Click "Get Start" on the course page and follow the on-screen instructions.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Are there any prerequisites for your courses?
                    </div>
                    <div className="collapse-content">
                        <p>  Prerequisites vary; check the course description.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    What is the refund policy if I'm not satisfied with a course?
                    </div>
                    <div className="collapse-content">
                        <p>Request a refund within 7 days of enrollment; contact support.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Fqu;