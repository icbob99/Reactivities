using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class RenameTableToActivitiesAttendees : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendee_Activities_ActivityId",
                table: "ActivityAttendee");

            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendee_AspNetUsers_AppUserId",
                table: "ActivityAttendee");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ActivityAttendee",
                table: "ActivityAttendee");

            migrationBuilder.RenameTable(
                name: "ActivityAttendee",
                newName: "ActivityAttendees");

            migrationBuilder.RenameIndex(
                name: "IX_ActivityAttendee_AppUserId",
                table: "ActivityAttendees",
                newName: "IX_ActivityAttendees_AppUserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ActivityAttendees",
                table: "ActivityAttendees",
                columns: new[] { "ActivityId", "AppUserId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_Activities_ActivityId",
                table: "ActivityAttendees",
                column: "ActivityId",
                principalTable: "Activities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_AspNetUsers_AppUserId",
                table: "ActivityAttendees",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_Activities_ActivityId",
                table: "ActivityAttendees");

            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_AspNetUsers_AppUserId",
                table: "ActivityAttendees");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ActivityAttendees",
                table: "ActivityAttendees");

            migrationBuilder.RenameTable(
                name: "ActivityAttendees",
                newName: "ActivityAttendee");

            migrationBuilder.RenameIndex(
                name: "IX_ActivityAttendees_AppUserId",
                table: "ActivityAttendee",
                newName: "IX_ActivityAttendee_AppUserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ActivityAttendee",
                table: "ActivityAttendee",
                columns: new[] { "ActivityId", "AppUserId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendee_Activities_ActivityId",
                table: "ActivityAttendee",
                column: "ActivityId",
                principalTable: "Activities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendee_AspNetUsers_AppUserId",
                table: "ActivityAttendee",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
