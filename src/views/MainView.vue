<template>
  	<div class="min-h-screen overscroll-contain bg-white dark:bg-black dark:text-white text-base md:text-xl">
		<Navbar />

		<div class="min-h-full mx-10">
			<div class="flex flex-col md:grid md:grid-cols-6 min-h-full">
				<div class="col-span-1 flex-initial relative mx-auto md:mx-0 order-2 md:order-none">
					<ul class="md:fixed md:bottom-0 mb-7 flex items-center space-x-4 md:flex-col md:space-y-4 md:space-x-0">
						<li v-show="githubLink.length">
							<a :href="githubLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-github" class="h-12 w-12 text-black transition ease-out hover:-translate-y-1 duration-300 dark:text-white"></font-awesome-icon>
							</a>
						</li>
						<li v-show="linkedinLink.length">
							<a :href="linkedinLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-linkedin" class="h-12 w-12 text-black transition ease-out hover:-translate-y-1 duration-300 dark:text-white"></font-awesome-icon>
							</a>
						</li>
						<li v-show="mediumLink.length">
							<a :href="mediumLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-medium" class="h-12 w-12 text-black transition ease-out hover:-translate-y-1 duration-300 dark:text-white"></font-awesome-icon>
							</a>
						</li>
						<li v-show="stackoverflowLink.length">
							<a :href="stackoverflowLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-stack-overflow" class="h-12 w-12 text-black transition ease-out hover:-translate-y-1 duration-300 dark:text-white"></font-awesome-icon>
							</a>
						</li>
					</ul>
				</div>
				<div class="col-span-4 flex-1 flex-col order-1 md:order-none">
					<div class="container mx-auto">
						<LandingView :content="portfolio.greeting" />

						<AboutView :content="portfolio.about" :transitions="portfolio.transitions" />

						<ExperienceView :content="portfolio.experiences" :transitions="portfolio.transitions" />

						<WorkView :content="portfolio.works" :transitions="portfolio.transitions" />

						<ContactView :content="portfolio.contact" :transitions="portfolio.transitions" />

						<footer class="hidden text-center md:block">
							<p>🚀 Designed & Created by <a href="https://maximshelepov.com" class="hover:text-link-color">Maxim Shelepov</a></p>
							<a href="https://github.com/feifyKike/webdev_portfolio" class="hover:text-link-color">Code available on Github 👾</a>
						</footer>
					</div>
				</div>
				<div class="hidden col-span-1 md:flex flex-initial relative order-2 text-center md:order-none">
					<p class="fixed bottom-2 right-10 origin-top-right rotate-90">📍 Based in {{ portfolio.greeting.basedLocation }}</p>
				</div>
				<footer class="block text-center md:hidden order-last mb-5">
					<p>🚀 Designed & Created by <a href="https://maximshelepov.com" class="hover:text-link-color">Maxim Shelepov</a></p>
					<a href="https://github.com/feifyKike/webdev_portfolio" class="hover:text-link-color">Code available on Github 👾</a>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import LandingView from './LandingView.vue'
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import WorkView from './WorkView.vue'
import ContactView from './ContactView.vue'

import portfolio from '../portfolio'

// Social Media Links
const githubLink = portfolio.socialMediaLinks.github
const linkedinLink = portfolio.socialMediaLinks.linkedin
const mediumLink = portfolio.socialMediaLinks.medium
const stackoverflowLink = portfolio.socialMediaLinks.stackoverflow

</script>