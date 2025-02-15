import React from 'react'

export async function generateMetadata() {
    return {
        title: "PicTrim - Terms of Service",
        description: "Read the terms of service for using PicTrim, including user responsibilities, limitations, and subscription details.",
    };
}

const page = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5 ">
                <h1 className="text-4xl font-bold text-center mb-6">Terms of Service</h1>
                <p className="text-center">
                    <strong>Effective Date:</strong> 25-02-2025 (dd-mm-yyyy)
                </p>
                <p className="mt-4">
                    Welcome to <strong>PicTrim</strong>. By using our application, you agree to the following terms and conditions.
                </p>

                <h2 className="font-bold">1. Acceptance of Terms</h2>
                <ul className="list-disc pl-10">
                    <li>By accessing or using PicTrim, you agree to comply with and be bound by these Terms of Service.</li>
                    <li>If you do not agree with any part of these terms, please do not use the application.</li>
                </ul>

                <h2 className="font-bold">2. Use of the Service</h2>
                <ul className="list-disc pl-10">
                    <li><strong>Personal Use:</strong> PicTrim is intended for personal and non-commercial use only.</li>
                    <li><strong>Prohibited Activities:</strong> Users may not modify, distribute, or reverse-engineer any part of the app.</li>
                </ul>

                <h2 className="font-bold">3. Subscription & Tickets</h2>
                <ul className="list-disc pl-10">
                    <li><strong>Subscription Plan:</strong> Users can subscribe to a premium plan to unlock unlimited tickets and remove ads.</li>
                    <li><strong>Ticket System:</strong> Each image export consumes one ticket. Users can obtain tickets through subscriptions or by watching ads.</li>
                </ul>

                <h2 className="font-bold">4. Termination</h2>
                <ul className="list-disc pl-10">
                    <li>We reserve the right to suspend or terminate your access to PicTrim if you violate these terms.</li>
                </ul>

                <h2 className="font-bold">5. Limitation of Liability</h2>
                <ul className="list-disc pl-10">
                    <li>PicTrim is provided &ldquo;as is&ldquo; without warranties of any kind.</li>
                    <li>We are not liable for any loss or damages resulting from the use of the application.</li>
                </ul>

                <h2 className="font-bold">6. Changes to Terms</h2>
                <ul className="list-disc pl-10">
                    <li>We may update these Terms of Service at any time, with changes posted on this page.</li>
                </ul>

                <h2 className="font-bold">7. Contact Us</h2>
                <ul className="list-disc pl-10">
                    <li>If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</a>.</li>
                </ul>
            </div>
        </>
    );
};

export default page;
