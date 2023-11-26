import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-aboutme",
  templateUrl: "./aboutme.component.html",
  styleUrls: ["./aboutme.component.scss"],
})
export class AboutmeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createEvalHTML();
  }
  public createEvalHTML() {
    for (let i = 0; i < this.evals.length; i++) {
      if (i !== this.evals.length - 1) {
        this.formattedEvals = this.formattedEvals + this.evals[i] + "<br><br>";
      } else {
        this.formattedEvals = this.formattedEvals + this.evals[i];
      }
    }
    document.getElementById("evalID").innerHTML = this.formattedEvals;
  }

  public formattedEvals = "";
  public evals = [
    '"Super, super helpful with taking the time to answer the questions we had thoroughly. Had such a wonderful energy during lab every Tuesday, which made it enjoyable."',
    '"Kathy did a really good job at explaining the lab, answering questions, and making an effort to care about each individual student."',
    '"Treating us with great patience and be enthusiastic about answering questions"',
    '"You always listen and have a clear answer to my questions! You also explain labs really clear!"',
    '"She is very patient and explain questions clearly"',
    "“Did a great job of communicating and relating to students. The reminding emails were great, keep those up. You were always happy too, very nice to have a positive fun environment to work in”",
    '"Explained well and offered a lot of help"',
    "“She was very enthusiastic and was always willing to help out! She sent out update email frequently and made sure we all knew what was expected of us. She knew everyones name in lab which personally made me feel very comfortable in her class. Kathy is one of, if not the best TA that I have had!”",
    '"You always listen and have a clear answer to my questions! You also explain the labs really clear!”',
    "“This is one of the best TA’s I have ever had. I felt like Kathy really cared about the students and wanted them to do well. She was also EXCELLENT at responding to last minute questions via email (which most TA’s are not that nice or helpful.) She was really good at explaining the concepts in a way that students could easily understand (another thing that TA’s do not often do.)”",
    "“Learning everyone’s name was beyond nice! It made the class feel a lot more connected”",
    '"She went out of her way to find answers to our questions, clearly explained the labs and treated everyone respectfully and seemed happy to be there to help us."',
    '"Able to answer any questions I had and not make me feel silly for asking that question."',
    "“Good listener, very patient, smile all the time, care about every student.”",
    "“She is one of the best TA's I have had. (I am a junior I've had a few)”",
    "“She explained things wells, answered questions, wanted to get to know us, and she was very understandable and nice!”",
    "“Keeping people engaged with the materials and making connections with the material and real world practices”",
    "“She was nice, helpful, and explained things clearly”",
    "“Explaining the lab material well and always being available to anyone who needed help”",
  ];
}
