
angular.module('beruffCompanyApp', []);

angular.module('beruffCompanyApp')
.controller('HomeController', function ($scope, $rootScope) {
	$rootScope.activePage = 'home';
	$rootScope.overlayText =  "As your trusted partner, we are committed to your success"
});

angular.module('beruffCompanyApp')
.controller('AboutController', function ($scope, $rootScope) {
	$rootScope.activePage = 'about';
	$scope.category = "default";
	$rootScope.overlayText = "\"Ultimately, creating value is about serving, giving more and better service than anyone else\" \n  --Eduardo Beruff, founding CEO. "
});

angular.module('beruffCompanyApp')
.controller('IndustriesController', function ($scope, $rootScope) {
	$rootScope.activePage = 'industries';
	$scope.category = "companies";
	$rootScope.overlayText = "Putting our clients’ interests first"
});
angular.module('beruffCompanyApp')
.controller('ServicesController', function ($scope, $rootScope) {
	$rootScope.activePage = 'services';
	$scope.category = "consult";
	$rootScope.overlayText = "Delivering unique value"
});

angular.module('beruffCompanyApp')
.controller('CasesController', function ($scope, $rootScope) {
	$rootScope.activePage = 'cases';
	$scope.caseStudy = 0;
	$rootScope.overlayText = "Delivering value; generating tangible benefits"
});

angular.module('beruffCompanyApp')
.controller('StudyController', function ($scope, $rootScope, $log, $routeParams) {
	$rootScope.activePage = 'case_detail_' + $routeParams.index;
	$rootScope.overlayText = ""

	var jsonData = [
	  {
	    "title": "Eviti",
	    "headline" : "Clinical Decision Support and its Payment",
	    "image": "images/cases/caseStudy1.png",
	    "body":"<p>Unwarranted variability in the quality of care leads to sub-optimal patient outcomes and unnecessary costs.  The Rand Corporation has documented that adults fail to receive recommended care for many illnesses an average 45% of the time.  In cancer, many studies have shown that about 30% of patients receive care that deviates from evidence-based standards without medical justification.</p><p>The Institute of Medicine states: “Studies repeatedly show marked variability in what healthcare providers actually do in a given situation. [By following evidence-based practice], there is untapped potential to reduce healthcare costs and improve quality.”<i> -- Institute of Medicine, 2007 IOM annual meeting summary</i></p><p>We created eviti (Evidence-based Treatment Intelligence for improved outcomes) to improve the quality of care in cancer and to ensure its appropriate reimbursement.  As the founding CEO, Eduardo Beruff built and led the organization from concept to service creation and deployment to full-fledged company.</p><p>Eviti connects payers and providers in real-time at the moment of clinical decision-making.  Eviti is a Platform-as-a-Service company paid for by payers and offered at no charge to providers.  Eviti delivers value to both payers and practices.  Risk bearers contract to use eviti, because it requires no technology installation and reduces variability in care from the historical 30% rate to 2%, thereby saving them millions of dollars per year in unnecessary costs.</p><p>Eviti provides oncology practices with access  to decision-support at the point of clinical prescribing for all cancer types and sub-types, including all registered clinical trials.  For practices, eviti reduces uncertainty about reimbursement by expediting approval for appropriate care and eliminating denial of treatments that are deemed to be quality care.</p><p>Eviti was built and is continuously improved by a multi-disciplinary team of professionals, including:  Clinical Content Experts, Clinical Librarians, Oncologists, Actuaries, Oncology Certified Nurses, Insurance Professionals, Systems Architects, Programmers, and Customer Service Specialists.</p><p>Eviti was sold during October 2014.  When Mr. Beruff resigned from eviti, during August 2015, the service had been used at least once by 75% of all oncology practices in the country and was deployed across more than 15 million insured lives, representing the single largest oncology decision-support program in the Nation.</p>"
	  },
	  {
	    "title": "American Society of Clinical Oncology",
	    "headline" : "Evaluating Growth Opportunity",
	    "image": "images/cases/caseStudy2.png",
	    "body":"<p>Mr. Beruff helped the leadership of the American Society of Clinical Oncology (ASCO) evaluate new opportunities for growth by conducting a feasibility study for the launch of a second-opinion service in cancer.  The service is intended to support oncologists and their patients, leading to improved quality of care and shared decision-making.</p><p>As part of the feasibility study, we spoke with representatives from the key stakeholder groups and developed and evaluated various operating and financial models for deployment.  The study was conducted on an accelerated timeline to reduce the costs and risks to ASCO.  Currently, the ASCO leadership is reviewing the results of the feasibility study to determine how to proceed.</p>"
	  },
	  {
	    "title": "Clinical Research",
	    "headline" : "Accelerating Drug Development in Cancer",
	    "image": "images/cases/caseStudy3.png",
	    "body":"<p>Although the unprecedented advance of science has created the promise of dramatic improvement in the treatment of cancer, too few promising cures are converted into actual approved treatments, because not enough patients or doctors participate in cancer clinical trials.</p><p>To address this important national issue, over a 5-year period we worked with the Board members and leaders of one of the Nation’s largest networks of clinical researchers in cancer to develop and deploy a strategy to increase clinical trial participation, thus accelerating drug development in cancer therapy.  Important components of the strategy included the creation, staffing, launching, and on-going business development of the key service divisions.  In addition, we conceived and implemented the revenue model and financial strategy to fund and sustain all programs and services.</p>"
	  },
	  {
	    "title": "Global Biotechnology Firm",
	    "headline" : "Developing Commercialization Strategy",
	    "image": "images/cases/caseStudy4.png",
	    "body":"<p>Our client has an exclusive license from Walter Reed to develop and commercialize a novel method of vaccination. The company wished to realize the value of the technology by licensing the product rights to pharmaceutical companies, thereby receiving payments throughout the development process and royalties on product sales.  Consequently, the choice of pharmaceutical partners and the structure of the agreements were critical to the company’s future. </p><p>We provided strategic perspective and insight that led to superior licensing agreements with major pharmaceutical companies.  Our methodology included:</p><ol><li>Identifying the diseases in which the technology would be most beneficial and lucrative;</li><li>Developing actionable profiles of potential pharmaceutical company partners;</li><li>Creating market and financial models;</li><li>Establishing negotiating strategies and timelines for milestone payments from pharmaceutical company partners; and,</li><li>Developing a strategic plan and organizational configuration with key actions and timetables.</li></ol><p>With the Chairman and CEO, we contacted executives at the target pharmaceutical companies and began negotiations. By the end of the engagement, our client had negotiated definitive agreements with two pharmaceutical companies and signed a letter of intent with a third. </p>"
	  }
	]

	$scope.data = jsonData[$routeParams.index]

	$('#case_study_content').html($scope.data.body)

});

angular.module('beruffCompanyApp')
.controller('ContactController', function ($scope, $rootScope) {
	$rootScope.activePage = 'contact';
	$rootScope.overlayText = ""
});

angular.module('beruffCompanyApp')
.config(function ($routeProvider) {
$routeProvider.
when('/contact', {
templateUrl: 'pages/contact_us.html',
controller: 'ContactController'
}).
when('/about', {
templateUrl: 'pages/about_us.html',
controller: 'AboutController'
}).
when('/home', {
templateUrl: 'pages/home.html',
controller: 'HomeController'
}).
when('/industries', {
templateUrl: 'pages/industries.html',
controller: 'IndustriesController'
}).
when('/services', {
templateUrl: 'pages/services.html',
controller: 'ServicesController'
}).
when('/cases', {
templateUrl: 'pages/case_studies.html',
controller: 'CasesController'
}).
when('/case_detail/:index', {
templateUrl: 'pages/case_studies_detail.html',
controller: 'StudyController'
}).
otherwise({
redirectTo: '/home'
});
});
//]]>