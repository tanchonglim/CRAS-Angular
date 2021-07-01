import { Component, OnInit } from '@angular/core';
import { College } from './../../../shared/models/college';
import { CollegeService } from './../../../shared/services/college/college.service';
import { Room } from './../../../shared/models/room';
import { RoomService } from './../../../shared/services/room/room.service';

@Component({
  selector: 'app-student-application-college',
  templateUrl: './student-application-college.component.html',
  styleUrls: ['./student-application-college.component.css']
})
export class StudentApplicationCollegeComponent implements OnInit {
  colleges : College[] = []
  rooms : Room[] = []
  totalAvailable : number[] = []
  displayedColumns: string[] = [
    'collegeName',
    'spaceLeft',
    'operation',
  ];

  constructor(private collegeService: CollegeService, private roomService: RoomService) { }

  async ngOnInit() {
    this.colleges = await this.collegeService.getCollegeList();
    this.colleges.forEach(async(college,index)=> {
      this.rooms = await this.roomService.getRoomList(college.collegeID);
      let availableSpace = 0;
      this.rooms.forEach((room)=>{
        availableSpace += room.capacity - room.occupied;
      })
      this.totalAvailable.push(availableSpace);
      college.totalAvailable = this.totalAvailable[index];
    })
    console.log(this.totalAvailable);    
  }

}
