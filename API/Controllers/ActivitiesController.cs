using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {


        [HttpGet]//api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]//api/activity/XXXX-XXXX-XXXX-XXXX
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            await Mediator.Send(new Create.Command { Activity = activity });

            return Ok();
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> EditActivity(Guid Id, Activity activity)
        {
            activity.Id = Id;

            await Mediator.Send(new Edit.Command { Activity = activity });

            return Ok();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteActivity(Guid Id)
        {
            

            await Mediator.Send(new Delete.Command {Id = Id});

            return Ok();
        }
    }
}