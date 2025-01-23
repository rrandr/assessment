import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FAQSection = () => {
  return (
    <section className="bsb-faq-3 py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Technical Customer Support - Assessment</h2>
            <p className="text-secondary text-center lead fs-4">Ralph Ramer Armero</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      {/* Questions Accordion */}
      <div className="mb-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-xl-10">
              <div className="d-flex align-items-end mb-5">
                <i className="bi bi-person-gear me-3 lh-1 display-5"></i>
                <h3 className="m-0">Netlify</h3>
              </div>
            </div>
            <div className="col-11 col-xl-10">
              <div className="accordion accordion-flush" id="questionlist">
                {/* Question 1 */}
                <div className="accordion-item bg-transparent border-top border-bottom py-3">
                  <h2 className="accordion-header" id="question1">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="question1">
                    <div className="accordion-body">
                      <p>
                      I created this using Gatsby and integrated it with Bootstrap. I used Gatsby because its new to me and its one of the technology that i need to learn if i will be hired.I imported from the terminal the basic website template for gatsby and after careful research i have integraded it with Bootstrap as the framework, I could simply use its CSS properties to create my desired UI design, saving me a lot of time compared to hardcoding everything from scratch, and recycled some codes from my old projects. However, I faced an issue where some of the CSS properties I used were already deprecated, I have to refer to the documentation to find the updated alternatives. After reviewing the documentation, I was able to implement the changes successfully in my code.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="accordion-item bg-transparent border-bottom py-3">
                  <h2 className="accordion-header" id="question2">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="question2">
                    <div className="accordion-body">
                      <p>At first, i was a curious about the services and try to snoop around before going to integrate it , at first i was having a hard time figuring it out , especially importing project using GIT , when i used manual upload , it was just a plug and play but during on importing via git , i tried  uploading a project using asp.net and i wasnt able to run it properly until i found out that hosting simple ASP.NET Core web apps on platforms like Netlify is not directly supported since these platforms are designed for static sites, and ASP.NET Core apps require a server to run , needless to say i was amazed how fast i was able to deploy and the website has fast loading times. i wasnt able to explore more but will look forward to learn it. </p>
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="accordion-item bg-transparent border-bottom py-3">
                  <h2 className="accordion-header" id="question3">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      Rank your 5 favorite and 5 least favorite activities from this list: 
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="question3">
                    <div className="accordion-body">
                      <h3>Top 5 Favorite Activities</h3>
                      <ol>
                        <li>Work with the development team to help design a new feature based on feedback from customers</li>
                        <li>Dig through server logs to troubleshoot a customer's website behavior</li>
                        <li>Help train and onboard new support teammates</li>
                        <li>Set up your own copy of several site frameworks for debugging</li>
                        <li>Join a Zoom call with a VIP customer you have been helping via email, upon their request</li>
                      </ol>
                      <h3>Top 5 Least Favorite Activities</h3>
                      <ol>
                        <li>Submit bug reports and potentially bug fixes</li>
                        <li>Respond to Netlify customers on Twitter</li>
                        <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
                        <li>Suggest and champion improvements to the Support team's workflow</li>
                        <li>Debug a customer's build using a programming language and framework that you've never seen before</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="accordion-item bg-transparent border-bottom py-3">
                  <h2 className="accordion-header" id="question4">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.
                    </button>
                  </h2>
                  <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="question4">
                    <div className="accordion-body">
                      <p>Documentation Link: https://react.dev/learn</p>
                     <p> During my career i always facinated with react.js , because its clear  and has a progressive learning path , its fun to navigate their interactive code examples , they also have comprehensive explanation of their core concepts , has practice tutorials and its beginner friendly and also covers advanced topics.</p>
                    </div>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="accordion-item bg-transparent border-bottom py-3">
                  <h2 className="accordion-header" id="question5">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.
                    </button>
                  </h2>
                  <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="question5">
                    <div className="accordion-body">
                      <p>In my own understanding , DNS configuration is quite difficult to the people who are less-technical website owners. First , integrating a domain name correctly involves difficult settings like nameservers and record types , which it requires for you to study and it needs to be precise , in layman term , its like a sending a parcel when you're not sure the exact address and routing instructions. Second , is when the DNS setting was change, updates like this doesn't happen real time across the internet. for example , here in the Philippines , we already saw the new website but on the US , its not yet update and still seeing the old website, it will take probably a day or two for it be change.</p>
                    </div>
                  </div>
                </div>

                {/* Question 6 */}
                <div className="accordion-item bg-transparent border-bottom py-3">
                  <h2 className="accordion-header" id="question6">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.
                    </button>
                  </h2>
                  <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="question6">
                    <div className="accordion-body">
                      <p>Before starting , i have to ask information from the client first because it would be difficult for me to investigate with less information.
                      First, i have to request screenshots of the full error, their build logs and then would ask if there are recent code changes, check their build configurations and then their dependency list and version. </p>
                      <p>Before submitting the ticket , i need to check related issues in the system if there are similar instances and possibly has the correct solutions on the problem</p>
                      <p>Hi customer,</p>
                        
                        <p>Thank you for reaching Netlify Support.</p>
                        
                        <p>I see you're experiencing a build failure. Could you help me troubleshoot by sharing:</p>
                        
                        <ul>
                            <li>Full build logs</li>
                            <li>Recent code changes</li>
                            <li>Screenshot of the complete error message</li>
                        </ul>
                        
                        <p>Upon my initial investigation, the error "Build script returned non-zero exit code: 2" suggests a problem in your build process.</p>
                        <p>You can check this document to help you out on this issue : https://docs.netlify.com/configure-builds/troubleshooting-tips/</p>
                        <p>Let me know if you have further questions.</p>
                        
                        <p>Best regards,<br />Support Team</p>
                    
                    </div>
                  </div>
                </div>

                {/* Question 7 */}
                <div className="accordion-item bg-transparent border-bottom py-3">
                  <h2 className="accordion-header" id="question7">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                      How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site.
                    </button>
                  </h2>
                  <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="question7">
                    <div className="accordion-body">
                      <p>upon reading the documentations https://docs.netlify.com/routing/redirects/redirect-options/ on the netlify.toml </p>
                      <p>for HTTP 301 Redirect Rule:</p>
                      <p>[[redirects]]</p>
                      <p>from = "/netlify/anything"</p> 
                      <p>to = "https://www.google.com/search?q=anything"</p> 
                      <p>status = 301</p> 
                      <p>  </p>
                      <p>for Proxy Redirect Rule:</p>
                      <p>[[redirects]]</p>
                      <p>from = "/api/*""</p> 
                      <p> to = "https://backend-api.example.com/:splat"</p> 
                      <p>status = 301</p> 
                      <p> force = true</p> 
                    </div>
                  </div>
                </div>

                {/* Question 8 */}
                <div className="accordion-item bg-transparent border-bottom py-3">
                  <h2 className="accordion-header" id="question8">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                      Please attempt to deploy a function on our service. This need not be complicated. It could be "Hello World". Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.
                    </button>
                  </h2>
                  <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="question8">
                    <div className="accordion-body">
                      <p>Upon reading the documentations https://docs.netlify.com/functions/get-started/?fn-language=js</p>
                      
                      <p> </p>
                      <p> on the function.js</p> 
                      <p>{`export default async (req, context) => {`}</p>
                      <p>{`  return new Response("Hello, world!");`}</p>
                      <p>{`};`}</p>
                      <p> </p>
                      <p> on netlify.toml</p> 
                      <p> [build]</p>
                      <p>functions = "functions" </p> 
                      <p> </p>
                      <p>i have node.js installed , netlify cli configured , checked the build logs,  i wasn't able to deploy it. </p>
                     
                    </div>
                  </div>
                </div>

                {/* Question 9 */}
                <div className="accordion-item bg-transparent border-bottom py-3">
                  <h2 className="accordion-header" id="question9">
                    <button
                      className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse9"
                      aria-expanded="false"
                      aria-controls="collapse9"
                    >
                      We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?
                    </button>
                  </h2>
                  <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="question9">
                    <div className="accordion-body">
                      <p>Upon receiving the report , I will acknowledge report and request specific details about the potential vulnerability and will assure this will be handled confidentiality.
                      </p>
                      
                  <p>Next i would verify the reporter's credibility while informing my direct supervisor regarding the report and escalate it to the proper department.
                  </p><p> </p>
                  <p>Hi Reporter,</p>
                  <p></p>
                  <p>Greetings!
                 </p> 
                  <p>Thank you for reporting this potential security issue. We take all security reports extremely seriously. Our security team will conduct a comprehensive and confidential investigation. We appreciate responsible disclosure and will keep you informed of substantive findings we can legally share.
                  </p>
                  <p>In line with this , could you provide specific details on this security issue , this will help us resolve the issue and to funnel down the main cause of this.
                  </p>
                  <p>Thank you for your cooperation,</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
