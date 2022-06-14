import base from "../common/base-survey-action.mjs";

export default {
  ...base,
  key: "survey_monkey-find-survey",
  name: "Get Survey Details",
  description: "Get details for a Survey. [See the docs here](https://developer.surveymonkey.com/api/v3/#api-endpoints-get-surveys-id-details)",
  version: "0.0.5",
  type: "action",
  async run({ $ }) {
    const response = await this.surveyMonkey.getSurveyDetails({
      $,
      surveyId: this.survey,
    });
    $.export(
      "$summary",
      `Successfully fetched survey "${response.title}"`,
    );
    return response;
  },
};
