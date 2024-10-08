using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class ActivitiesController : BaseApiController
    {


        [HttpGet]//api/activities
        public async Task<IActionResult> GetActivities()
        {
            var result = await Mediator.Send(new List.Query());

            return HandleResult(result);
        }


        [HttpGet("{id}")]//api/activity/XXXX-XXXX-XXXX-XXXX
        public async Task<IActionResult> GetActivity(Guid id)
        {
            var result = await Mediator.Send(new Details.Query { Id = id });

            return HandleResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            var result = await Mediator.Send(new Create.Command { Activity = activity });

            return HandleResult(result);
        }

        [Authorize(Policy = "IsActivityHost")]
        [HttpPut("{Id}")]
        public async Task<IActionResult> EditActivity(Guid Id, Activity activity)
        {
            activity.Id = Id;

            var result = await Mediator.Send(new Edit.Command { Activity = activity });

            return HandleResult(result);
        }

        [Authorize(Policy = "IsActivityHost")]
        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteActivity(Guid Id)
        {
            var result = await Mediator.Send(new Delete.Command { Id = Id });

            return HandleResult(result);
        }
        [HttpPost("{Id}/attend")]
        public async Task<IActionResult> Attend(Guid Id)
        {
            var result = await Mediator.Send(new UpdateAttendance.Command { Id = Id });

            return HandleResult(result);
        }
    }
}