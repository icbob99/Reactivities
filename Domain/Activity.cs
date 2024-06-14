namespace Domain
{
    public class Activity
    {
        public Guid TheId { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Categoty { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
    }
}