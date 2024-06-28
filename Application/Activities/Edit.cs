using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command:IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext dataContext;

            public Handler(DataContext dataContext)
            {
                this.dataContext = dataContext;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await dataContext.Activities.FindAsync(request.Activity.Id);

                activity.Title = request.Activity.Title ?? activity.Title;

                await dataContext.SaveChangesAsync();
            }
        }
    }
}