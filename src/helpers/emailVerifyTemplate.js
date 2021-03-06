/**
 * @class Template
 * @description Authentication based class
 *  */
class Template {
  /**
   * Verifiy Template
   * @param {String} names -EmailTemplate
   * @param {String} to -EmailTemplate
   * @param {String} token -EmailTemplate
   * @returns {String} The response String
   */
  static sendVerification(names, to, token) {
    return `
    <div style="background:#e5eeff;width:100%;padding:20px 0;">
      <div style="max-width:760px;margin:0 auto;background:#ffffff">
      <div style="background:#303346;padding:10px;color:#ffffff;text-align:center;font-size:34px">
      Authors Haven - Team Tesla
      </div>
      <div style="padding:0;">
      </div>
      <div style="padding:20px;text-align:left;">
      <p>
      Well ${names}, congratulations for choosing AuthorsHaven.
      To verify that ${to} is your email, could you please click this link below to verify your AuthorsHaven's account?
      <br/>
      <a href="${process.env.BASE_URL}/api/auth/verify/?token=${token}">Click here to verify your account</a>
      <br/>
      Here there is the link below where you can visit ahmedkhaled4d and get more information about what's ahmedkhaled4d

      </p>
      <a href="https://ahmedkhaled4d.com">Visit ahmedkhaled4d's website</a>
      </div>
      <br>
      <div style="padding:20px;text-align:left;">
      <b>ahmedkhaled4d, Team @Tesla - Cohort 5</b>
      </div>
      </div>
      <div style="padding:35px 10px;text-align:center;">
      Copyright, 2019<br>
        ahmedkhaled4d, Team Tesla
      </div>
      </div>
    `;
  }
}

export default Template;
