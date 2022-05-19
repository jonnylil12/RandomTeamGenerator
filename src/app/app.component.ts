import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newMemberName: string = "";
  numberOfTeams:string = "";
  members: string[] = [];
  teams: string[][];
  errorMessage = '';
  title: string = "webapp";


  onMemberInput(member: string) {
    this.newMemberName = member;

  }

  onTeamsInput(value: string) {
    this.numberOfTeams = value;
  }


  addMember() {
   this.errorMessage = this.checkError('1');
    if(!this.errorMessage) {
      this.members.push(this.newMemberName);

    }


  }

  generateTeams(): void{
    this.teams=[];
    this.errorMessage = this.checkError('2')
    if(!this.errorMessage) {

        this.teams = this.createTeamArray();
        let members_copy = [...this.members];
        while(members_copy.length != 0) {

          for (let i = 0; i < Number(this.numberOfTeams); i++) {

            let pick = Math.floor(Math.random() * members_copy.length);
            this.teams[i].push(...members_copy.splice(pick, pick+1));
          }

        }
        this.resetFields('2');

     }

  }


  createTeamArray(): any[][]{
    let T =[];
    while(T.push([]) < Number(this.numberOfTeams)) {}
    return T;

  }


  resetFields(caller = ''): void{
    if(caller === '1')
      this.newMemberName = '';

    else if(caller === '2')
      this.numberOfTeams = '';

    else{
      this.members=[];
      this.teams=[];
    }
    this.errorMessage ='';
  }


  checkError(caller): string{
    if (caller === '1'){
      if (!this.newMemberName)
        return 'Name cant be empty';
    }
    else{
        if (!this.numberOfTeams || Number(this.numberOfTeams) < 0)
          return "Number of Teams has to be more than one";

        else if(isNaN(Number(this.numberOfTeams)))
          return 'Please enter a valid number';

        else if(Number(this.numberOfTeams) > this.members.length)
          return 'Not enough members for teams';
      }
    return ''


  }
}

