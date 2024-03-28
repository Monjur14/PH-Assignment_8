const AboutUs = () => {
  return (
    <div className="container px-2 md:px-6 mx-auto">
      <section className="dark:bg-gray-100 rounded-md dark:text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-600">Explore our FAQ section to find answers to frequently asked questions about our website, services, and more. If you have any queries, this is the place to find the answers!</p>
		<div className="space-y-4">
			
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> What is BookShop about</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">BookShop is an online platform dedicated to book enthusiasts. We provide a wide range of features including book reviews, author interviews, book recommendations, and much more.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I navigate the website?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You can easily navigate through different sections of the website using the menu located at the top of the page. Simply click on the desired category such as "Home", "Listed Books", "Page to Read", etc., to explore the content.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is BookShop free to use?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, BookShop is completely free to use. You can access all our features and content without any charges.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do I need to create an account to use BookShop?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600"> No, you can browse and explore BookShop without creating an account. However, creating an account allows you to personalize your experience, such as saving your favorite books, leaving reviews, and receiving personalized recommendations.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I find books on BookShop?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You can search for books using the search bar located at the top of the page. You can also browse through different categories such as fiction, non-fiction, mystery, romance, etc.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I contact customer support?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">If you have any questions, feedback, or issues, you can reach out to our customer support team by clicking on the "Contact Us" link in the Navbar of the website. Fill out the contact form, and our team will get back to you as soon as possible.</p>
			</details>
		</div>
	</div>
</section>
    </div>
  )
}

export default AboutUs
