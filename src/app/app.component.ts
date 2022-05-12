import { Component } from '@angular/core';
import {getMaxNumberOfWorkers} from "@angular/compiler-cli/ngcc/src/ngcc_options";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string = "";
  numberOfTeams:string = "";
  members: string[] = [];
  teams: string[][] = [];
  errorMessage = '';


  onMemberInput(member: string) {
    this.newMemberName = member;

  }



  onTeamsInput(value: string) {
    this.numberOfTeams = value;
  }


  addMember() {

    if (!this.newMemberName)
      this.errorMessage = "Name cant be empty";
    else {
      this.members.push(this.newMemberName);
      this.newMemberName = '';
      this.errorMessage = '';
    }


  }

  generateTeams() {
    this.teams=[];
    if (!this.numberOfTeams || Number(this.numberOfTeams) < 0)
      this.errorMessage = "Number of Teams has to be more than one";
    else if(isNaN(Number(this.numberOfTeams)))
      this.errorMessage = 'Please enter a valid number';
    else if(Number(this.numberOfTeams) > this.members.length)
      this.errorMessage = 'Not enough members for teams';

    else {
        for (let i = 0; i < Number(this.numberOfTeams); i++)
          this.teams.push([]);

        let members_copy = [...this.members];
        while(members_copy.length >= 1) {
          for (let i = 0; i < Number(this.numberOfTeams); i++) {
            let pick = Math.floor(Math.random() * members_copy.length);
            this.teams[i].push(...members_copy.splice(pick, pick+1));
          }

        }
        this.numberOfTeams = '';
        this.errorMessage = '';

     }

  }


  resetFields(){
    this.members=[];
    this.teams=[];
    this.errorMessage ='';
  }
}

