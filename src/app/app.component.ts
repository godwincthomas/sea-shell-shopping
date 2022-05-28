import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { slideInAnimation } from 'src/app/route-animate';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) { }
  ngOnInit() {
    $("#welplaybtn").show()
    $("#playbtn").hide()
    $("#pausebtn").hide()
    $('#back-to-top').addClass('backtotop')    
    $(document).ready(function () {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
          $('#back-to-top').removeClass('backtotop')
        } else {
          $('#back-to-top').addClass('backtotop')
        }
      });
      $('#back-to-top').click(function () {
        // $('#back-to-top').addClass('backtotop')
        $("html, body").animate({
          scrollTop: 0
        }, 600);
        return false;
      });
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    this.title()

  }
  title() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router)
      )
      .subscribe((event) => {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
        this.titleService.setTitle(title);
      }
      );
  }
  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
  song: any
  pause: any
  play: any
  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/wave.mp3";
    audio.load();
    audio.play();
    audio.loop = true;
    $("#welplaybtn").hide()
    $("#playbtn").show()
    $("#pausebtn").hide()
    var button = document.getElementById("button");
    button.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
        $("#playbtn").show()
        $("#pausebtn").hide()
        $("#welplaybtn").hide()
        // button.innerHTML = "Pause";
      } else {
        audio.pause();
        $("#playbtn").hide()
        $("#pausebtn").show()
        $("#welplaybtn").hide()
        // button.innerHTML = "Play";
      }
    });
  }
  playAudio1() {
    let welcomeaudio = new Audio();
    welcomeaudio.src = "../../../assets/audio/welcome.mp3";
    welcomeaudio.load();
    welcomeaudio.play();
    this.playAudio()
  }

}
