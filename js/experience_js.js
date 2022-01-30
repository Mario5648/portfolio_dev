function change_experience_content (experience_name)
{

  switch (experience_name) {
    case "ai_4_good":
      document.getElementById("ai4good_button").style.background = "rgba(204,0,0,0.4)";
      document.getElementById("easyexpunctions_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("pwrdby_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("mitre_button").style.background = "rgba(0,0,0,0)";

      var experience_content = `
      <div class="experience_job_container">
        <img src="./images/ai4good_logo.jpg" class="experience_image" style="height:100px;"></img>
        <p class="experience_job_title">ML Researcher/Web Developer <p style="color:#cc0000;font-weight:400;">@AI for good</p></p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Lead a project on creating data analytical models to identify food insecure zip codes in Cleveland, Ohio</p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Researched and presented technological recommendations to Kelowna, BC, Canada and Longbeach, California, US</p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Wrote reports on Agricultural and Economic AI recommendations</p>
      </div>
      `;
      document.getElementById("experience_content").innerHTML = experience_content;
      break;
    case "easyexpunctions":
      document.getElementById("ai4good_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("easyexpunctions_button").style.background = "rgba(204,0,0,0.4)";
      document.getElementById("pwrdby_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("mitre_button").style.background = "rgba(0,0,0,0)";
      var experience_content = `
      <div class="experience_job_container">
        <img src="./images/ee_logo.jpg" class="experience_image" style="width:100px;height:100px;"></img>
        <p class="experience_job_title">Software Engineer Intern <p style="color:#cc0000;font-weight:400;">@Easy Expunction</p></p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Designed and programmed web application to automate user web searches by 100%</p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Generated over $2,733 of revenue within 2 months</p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Created reports/dashboards to present earnings and user data to sales team</p>
      </div>
      `;

      document.getElementById("experience_content").innerHTML = experience_content;

      break;
    case "pwrdby":
      document.getElementById("ai4good_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("easyexpunctions_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("pwrdby_button").style.background = "rgba(204,0,0,0.4)";
      document.getElementById("mitre_button").style.background = "rgba(0,0,0,0)";
      var experience_content = `
      <div class="experience_job_container">
        <img src="./images/pwrdby_logo.png" class="experience_image"></img>
        <p class="experience_job_title">Data Science Intern <p style="color:#cc0000;font-weight:400;">@Pwrd By</p></p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      `;

      document.getElementById("experience_content").innerHTML = experience_content;

      break;
    case "mitre":
      document.getElementById("ai4good_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("easyexpunctions_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("pwrdby_button").style.background = "rgba(0,0,0,0)";
      document.getElementById("mitre_button").style.background = "rgba(204,0,0,0.4)";
      var experience_content = `
      <div class="experience_job_container">
        <img src="./images/mitre_logo.png" class="experience_image"></img>
        <p class="experience_job_title">Software Engineer Intern <p style="color:#cc0000;font-weight:400;">@MITRE</p></p>
        <p class="experience_job_description"><i class="fa fa-angle-double-right" style="color:#cc0000;font-size:20px;"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      `;

      document.getElementById("experience_content").innerHTML = experience_content;

      break;

  }
}
