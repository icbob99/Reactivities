using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Result<ActivityDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<ActivityDto>>
        {
            private readonly DataContext _dataContext;
            private readonly IMapper _mapper;

            public Handler(DataContext dataContext, IMapper mapper)
            {
                this._dataContext = dataContext;
                this._mapper = mapper;
            }

            public async Task<Result<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var acttivity = await _dataContext.Activities
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(a => a.Id == request.Id);

                return Result<ActivityDto>.Success(acttivity);
            }
        }
    }
}