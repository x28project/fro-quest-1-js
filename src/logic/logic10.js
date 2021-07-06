window.logic10 = function () {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (!cmd_isset(5)) {
          jumpTo(500);
          break logicSwitch;
        }
        cmd_load_pic(0);
        cmd_draw_pic(0);
        cmd_discard_pic(0);
        cmd_set_horizon(0);
        cmd_status_line_on();
        cmd_accept_input();
        cmd_load_view(100);
        cmd_animate_obj(100);
        cmd_set_view(100, 100);
        cmd_set_priority(100, 15);
        cmd_position(100, 106, 150);
        cmd_assignn(91, 2);
        cmd_cycle_time(100, 91);
        cmd_draw(100);
        cmd_load_view(101);
        cmd_animate_obj(101);
        cmd_set_view(101, 101);
        cmd_position(101, 22, 119);
        cmd_assignn(91, 2);
        cmd_cycle_time(101, 91);
        cmd_stop_cycling(101);
        cmd_ignore_objs(101);
        cmd_draw(101);
        cmd_set(60);
        cmd_load_view(102);
        cmd_animate_obj(102);
        cmd_set_view(102, 102);
        cmd_set_cel(102, 1);
        cmd_set_priority(102, 15);
        cmd_position(102, 38, 74);
        cmd_stop_cycling(102);
        if (!!cmd_equaln(1, 11)) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_draw(102);
      case 501:
        if (!!cmd_isset(212)) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_load_view(239);
        cmd_animate_obj(239);
        cmd_set_view(239, 239);
        cmd_set_loop(239, 1);
        cmd_position(239, 80, 72);
        cmd_stop_cycling(239);
        cmd_draw(239);
      case 502:
        if (!!cmd_equaln(1, 11)) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_position(0, 30, 113);
        cmd_assignn(6, 5);
        jumpTo(1);
        break logicSwitch;
      case 503:
        cmd_assignn(6, 0);
        cmd_set_loop(0, 0);
        cmd_set_cel(0, 3);
        cmd_position(0, 86, 160);
        cmd_prevent_input();
        cmd_set_cel(100, 0);
        cmd_stop_cycling(100);
        cmd_load_view(205);
        cmd_animate_obj(205);
        cmd_set_view(205, 205);
        cmd_set_loop(205, 0);
        cmd_set_cel(205, 0);
        cmd_position(205, 5, 67);
        cmd_set_priority(205, 15);
        cmd_ignore_objs(205);
        cmd_assignn(91, 2);
        cmd_cycle_time(205, 91);
        cmd_draw(205);
        cmd_assignn(77, 11);
        cmd_end_of_loop(205, 121);
      case 1:
        cmd_assignn(42, 0);
        cmd_load_sound(10);
        cmd_sound(10, 147);
        cmd_draw(0);
        cmd_show_pic();
      case 500:
        if (cmd_isset(147)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(2);
            break logicSwitch;
          }
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_sound(10, 147);
        }
      case 2:
      case 2800:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_center_posn(0, 19, 112, 50, 119) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m1);
                    jumptoLineArray = [2800, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2800, 10);
                    break logic;
                  case 280000:
                    jumpTo(3);
                    break logicSwitch;
                }
              }
              cmd_print(m2);
              jumptoLineArray = [2801];
              jumpTo(2801, 10);
              break logic;
          }
        }
      case 2801:
      case 3:
        if (cmd_said(15, 29)) {
          cmd_print(m3);
          jumptoLineArray = [2802];
          jumpTo(2802, 10);
          break logic;
        }
      case 2802:
        if (cmd_said(15, 104)) {
          cmd_print(m4);
          cmd_print(m5);
          jumptoLineArray = [2803];
          jumpTo(2803, 10);
          break logic;
        }
      case 2803:
        if (cmd_said(15, 47)) {
          cmd_print(m6);
          jumptoLineArray = [2804];
          jumpTo(2804, 10);
          break logic;
        }
      case 2804:
        if (cmd_said(15, 110)) {
          cmd_print(m7);
          jumptoLineArray = [2805];
          jumpTo(2805, 10);
          break logic;
        }
      case 2805:
      case 2806:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 103) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m8);
              jumptoLineArray = [2806, 28000];
              ifSkipArray = [true];
              jumpTo(2806, 10);
              break logic;
            case 28000:
              if (!cmd_isset(212)) {
                cmd_print(m9);
                jumptoLineArray = [2807];
                jumpTo(2807, 10);
                break logic;
              }
          }
        }
      case 2807:
        if (
          cmd_said(22, 103) ||
          cmd_said(111, 64, 103) ||
          cmd_said(111, 103, 64) ||
          cmd_said(22, 112) ||
          cmd_said(111, 64, 112) ||
          cmd_said(111, 112, 64)
        ) {
          cmd_print(m10);
          jumptoLineArray = [2808];
          jumpTo(2808, 10);
          break logic;
        }
      case 2808:
      case 2809:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 92) || cmd_said(15, 93, 92) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(212) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m11);
                    jumptoLineArray = [2809, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2809, 10);
                    break logic;
                  case 280000:
                    jumpTo(4);
                    break logicSwitch;
                }
              }
              cmd_print(m12);
              jumptoLineArray = [2810];
              jumpTo(2810, 10);
              break logic;
          }
        }
      case 2810:
      case 4:
        if (cmd_said(15, 54)) {
          cmd_print(m13);
          jumptoLineArray = [2811];
          jumpTo(2811, 10);
          break logic;
        }
      case 2811:
        if (cmd_said(15, 113)) {
          cmd_print(m14);
          jumptoLineArray = [2812];
          jumpTo(2812, 10);
          break logic;
        }
      case 2812:
        if (cmd_said(50, 113)) {
          cmd_print(m15);
          jumptoLineArray = [2813];
          jumpTo(2813, 10);
          break logic;
        }
      case 2813:
        if (cmd_said(15, 114)) {
          cmd_print(m16);
          jumptoLineArray = [2814];
          jumpTo(2814, 10);
          break logic;
        }
      case 2814:
        if (cmd_said(15, 44)) {
          cmd_print(m17);
          jumptoLineArray = [2815];
          jumpTo(2815, 10);
          break logic;
        }
      case 2815:
      case 2816:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(26, 44) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_center_posn(0, 19, 112, 50, 119) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m18);
                    jumptoLineArray = [2816, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2816, 10);
                    break logic;
                  case 280000:
                    jumpTo(5);
                    break logicSwitch;
                }
              }
              cmd_print(m19);
              jumptoLineArray = [2817];
              jumpTo(2817, 10);
              break logic;
          }
        }
      case 2817:
      case 5:
        if (cmd_isset(60)) {
          if (cmd_center_posn(0, 22, 116, 44, 128)) {
            cmd_reset(60);
            cmd_normal_cycle(101);
            cmd_end_of_loop(101, 61);
          }
          jumpTo(6);
          break logicSwitch;
        }
        if (cmd_isset(61) && !cmd_center_posn(0, 22, 116, 44, 128)) {
          cmd_reset(61);
          cmd_set(60);
          cmd_reverse_loop(101, 62);
          cmd_observe_blocks(0);
          cmd_reset(63);
        }
      case 6:
        if (cmd_isset(61)) {
          cmd_erase(102);
          if (!cmd_isset(63)) {
            cmd_ignore_blocks(0);
            cmd_set(63);
          }
        }
        if (cmd_said(49, 48) || cmd_said(49, 63, 48)) {
          if (cmd_center_posn(0, 19, 112, 50, 119)) {
            cmd_reset(60);
            cmd_move_obj(0, 40, 119, 0, 64);
            if (!cmd_isset(210)) {
              cmd_set(210);
              cmd_increment(3);
            }
            jumpTo(7);
            break logicSwitch;
          }
          cmd_print(m20);
          jumptoLineArray = [2818];
          jumpTo(2818, 10);
          break logic;
        }
      case 2818:
      case 7:
        if (cmd_isset(64)) {
          cmd_reset(64);
          cmd_set_cel(102, 0);
          cmd_draw(102);
          cmd_reverse_loop(101, 65);
        }
        if (cmd_isset(65)) {
          cmd_reset(65);
          cmd_new_room(5);
          if (AGI.break_all_logics) return;
        }
        if (!cmd_said(41, 29)) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_prevent_input();
        cmd_set_cel(100, 0);
        cmd_stop_cycling(100);
        if (!cmd_equaln(77, 0)) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_print(m21);
        jumptoLineArray = [2819];
        jumpTo(2819, 10);
        break logic;
      case 2819:
        jumpTo(8);
        break logicSwitch;
      case 505:
        if (!cmd_equaln(77, 3)) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_assignn(77, 2);
        jumpTo(8);
        break logicSwitch;
      case 506:
        if (!!cmd_lessn(77, 8)) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_assignn(77, 9);
      case 507:
      case 8:
        cmd_load_view(205);
        cmd_animate_obj(205);
        cmd_set_view(205, 205);
        cmd_set_loop(205, 0);
        cmd_set_cel(205, 0);
        cmd_position(205, 5, 67);
        cmd_set_priority(205, 15);
        cmd_ignore_objs(205);
        cmd_assignn(91, 2);
        cmd_cycle_time(205, 91);
        cmd_draw(205);
        cmd_end_of_loop(205, 121);
      case 504:
      case 2820:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(121) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              if (cmd_equaln(77, 0)) {
                cmd_print(m22);
                cmd_print(m23);
                jumptoLineArray = [2820, 28000];
                ifSkipArray = [true];
                jumpTo(2820, 10);
                break logic;
              }
            case 28000:
              if (cmd_equaln(77, 1)) {
                cmd_print(m24);
                cmd_print(m25);
                jumptoLineArray = [2820, 28001];
                ifSkipArray = [true];
                jumpTo(2820, 10);
                break logic;
              }
            case 28001:
              ifSkip = ifSkipArrayShift();
              if (cmd_equaln(77, 2) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m26);
                    cmd_print(m27);
                    jumptoLineArray = [2820, 28001, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2820, 10);
                    break logic;
                  case 280000:
                    if (!cmd_isset(213)) {
                      cmd_set(213);
                      cmd_increment(3);
                    }
                }
              }
              if (cmd_equaln(77, 4)) {
                cmd_print(m28);
                cmd_print(m29);
                jumptoLineArray = [2820, 28002];
                ifSkipArray = [true];
                jumpTo(2820, 10);
                break logic;
              }
            case 28002:
              if (cmd_equaln(77, 5)) {
                cmd_print(m30);
                cmd_print(m31);
                jumptoLineArray = [2820, 28003];
                ifSkipArray = [true];
                jumpTo(2820, 10);
                break logic;
              }
            case 28003:
              if (cmd_equaln(77, 6)) {
                cmd_print(m32);
                jumptoLineArray = [2820, 28004];
                ifSkipArray = [true];
                jumpTo(2820, 10);
                break logic;
              }
            case 28004:
              if (cmd_equaln(77, 7)) {
                cmd_print(m33);
                jumptoLineArray = [2820, 28005];
                ifSkipArray = [true];
                jumpTo(2820, 10);
                break logic;
              }
            case 28005:
              if (cmd_equaln(77, 9)) {
                cmd_print(m34);
                jumptoLineArray = [2820, 28006];
                ifSkipArray = [true];
                jumpTo(2820, 10);
                break logic;
              }
            case 28006:
              if (cmd_equaln(77, 11)) {
                cmd_print(m35);
                jumptoLineArray = [2820, 28007];
                ifSkipArray = [true];
                jumpTo(2820, 10);
                break logic;
              }
            case 28007:
              cmd_reset(121);
              cmd_set_loop(205, 1);
              cmd_set_cel(205, 0);
              cmd_assignn(91, 4);
              cmd_cycle_time(205, 91);
              cmd_end_of_loop(205, 122);
              cmd_increment(77);
          }
        }
        if (cmd_isset(122)) {
          cmd_reset(122);
          cmd_set_loop(205, 0);
          cmd_random(0, 5, 80);
          cmd_set_cel_v(205, 80);
          cmd_assignn(91, 2);
          cmd_cycle_time(205, 91);
          cmd_end_of_loop(205, 121);
          if (
            cmd_equaln(77, 3) ||
            cmd_equaln(77, 8) ||
            cmd_equaln(77, 10) ||
            cmd_equaln(77, 12)
          ) {
            cmd_reset(121);
            cmd_erase(205);
            cmd_accept_input();
            cmd_set_cel(100, 0);
            cmd_normal_cycle(100);
            if (cmd_equaln(77, 8) || cmd_equaln(77, 10)) {
              cmd_new_room(11);
              if (AGI.break_all_logics) return;
            }
          }
        }
        if (
          !(cmd_said(42, 56) || cmd_said(42, 56, 29) || cmd_said(42, 29, 56))
        ) {
          jumpTo(508);
          break logicSwitch;
        }
        if (!cmd_posn(0, 90, 153, 110, 167)) {
          jumpTo(509);
          break logicSwitch;
        }
        if (!cmd_has(i4)) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_prevent_input();
        cmd_set_cel(100, 0);
        cmd_stop_cycling(100);
        if (!!cmd_isset(211)) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_set(211);
        cmd_increment(3);
      case 511:
        cmd_print(m36);
        jumptoLineArray = [2829];
        jumpTo(2829, 10);
        break logic;
      case 2829:
        cmd_load_view(205);
        cmd_animate_obj(205);
        cmd_set_view(205, 205);
        cmd_set_loop(205, 0);
        cmd_set_cel(205, 0);
        cmd_position(205, 5, 67);
        cmd_set_priority(205, 15);
        cmd_ignore_objs(205);
        cmd_assignn(91, 2);
        cmd_cycle_time(205, 91);
        cmd_draw(205);
        cmd_assignn(77, 4);
        cmd_end_of_loop(205, 121);
        jumpTo(9);
        break logicSwitch;
      case 510:
        cmd_print(m37);
        jumptoLineArray = [2830];
        jumpTo(2830, 10);
        break logic;
      case 2830:
      case 9:
        jumpTo(10);
        break logicSwitch;
      case 509:
        cmd_print(m38);
        jumptoLineArray = [2831];
        jumpTo(2831, 10);
        break logic;
      case 2831:
      case 508:
      case 10:
        if (!(cmd_said(50, 92) || cmd_said(50, 93, 92))) {
          jumpTo(512);
          break logicSwitch;
        }
        if (!!cmd_isset(212)) {
          jumpTo(513);
          break logicSwitch;
        }
        if (!cmd_right_posn(0, 66, 90, 84, 100)) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_print(m39);
        cmd_print(m40);
        jumptoLineArray = [2832];
        jumpTo(2832, 10);
        break logic;
      case 2832:
        if (!!cmd_isset(212)) {
          jumpTo(515);
          break logicSwitch;
        }
        cmd_set(212);
        cmd_increment(3);
      case 515:
        cmd_erase(239);
        cmd_get(i20);
        cmd_show_obj(239);
        jumptoLineArray = [2833];
        jumpTo(2833, 10);
        break logic;
      case 2833:
        jumpTo(11);
        break logicSwitch;
      case 514:
        cmd_print(m41);
        jumptoLineArray = [2834];
        jumpTo(2834, 10);
        break logic;
      case 2834:
      case 11:
        jumpTo(12);
        break logicSwitch;
      case 513:
        cmd_print(m42);
        jumptoLineArray = [2835];
        jumpTo(2835, 10);
        break logic;
      case 2835:
      case 512:
      case 12:
        return;
    }
  }
};
MESSAGES[10] = [
  '',
  'You are inside an elevator. There is a button for going up.',
  'You neighbor is relaxing like usual. He lives in this astounding subterranean home. An elevator takes you to and from the surface. Aside from that you are quite impressed by the artwork on the wall.',
  'Your neighbor is relaxing like usual.',
  'What is that?',
  "Whatever it is, it's great!",
  "It sure can lift you up when you're feeling down.",
  'If only there were curtains you could compare.',
  "Haven't you seen a sink before?",
  'Next to the sink is an empty glass.',
  'This is not the time for wasting water!',
  'Your neighbor left an empty glass sitting next to the sink.',
  'You see no glass.',
  "It's where he likes to chill.",
  "It's where he likes to dream.",
  "Don't take the man's dreams from him.",
  'Above and below the sink there are uninteresting cabinets.',
  "If you've seen one bathroom, you've seen them all. Well, actually, you've never seen a door like that.",
  'You are inside an elevator. The door opens automatically.',
  "You have your own bathroom, if you have to go that bad... And you don't.",
  'Maybe you should be in the elevator to press the correct button.',
  'You let your neighbor know you just came to say, "Hello."',
  '"Hey Man! Rough day, huh?"',
  'You proceed to tell him about your adventures so far.',
  '"Well man, isn\'t that special."',
  'You agree with him. You were always told you were special in your own special way.',
  '"Sorry man," he apologizes, "I would be a more attentive listener if this dry skin wasn\'t bugging me so much. What should I do?"',
  'You voice your concerns and offer to think of a way to help.',
  '"Thanks man! You don\'t know how much this helps me."',
  "You helped a friend. Don't you feel good?",
  '"Man, what can I do for you in return?"',
  'You explain how you are just glad you could help.',
  '"Nah man, I gotta do something for ya."',
  '"I got it! I am gonna hook you up with a friend of mine. Here is her picture..."',
  '"You want to see her picture again? Here it is..."',
  '"I\'ll tell her to meet you up by the crumbling wall."',
  'You give your neighbor the lotion to soothe his savage skin.',
  "You don't have that.",
  "If you'd like to be neighborly, get closer to your neighbor.",
  'A not-so-cool, not-so-refreshing empty glass.',
  "You hope that your neighbor won't mind if you just take it.",
  "It's over by the sink. Move closer.",
  'There are no more glasses.',
];
CONTROLS[10] =
  '?4?4?4?4?4?4?4?4?4?4?4?4?4<.K5g>s.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95>.45.!.95<95<Z<y.!.95<95<Z<y.!.95<95<U5g5.+5U5.x.95<95<U5g5.+5U5.x.95<95<P5r5.+5P5.x.95<95<P5r5.+5U5.r.95<95<P5r5.+5U5.r.95<95<K5x5.+5U5.r.95<95<K5x5.+5Z5.l.95<95<K5!5.+5U5.l.95<95<E5^5.+5U5.l.95<95<E5^5.+5U5.l.95<95<95+5.+5Z5.g.95<95P.=+5.+5Z5.g.95<95P.={5.+5U5.g.95<95P5<!5.+5Z5.Z.95<95K5<^.}Z5.Z.95<95K5>.95.Z.95<95K5>.E5.U.95<95K5>.E5.U.95<95K5>.E5.U.95<95E5>.P5.P.95<95E5>.P5.P.95<95E5>.P5.P.95<95E5>.U5.K.95<95E5>.U5.K.95<9595>.Z5.K.95<9595>.g5.E.95<9595>.g5.E.9<F95>.g5.E.9A<4595>.l5.9.9A<4A>.r5.9.9A<4A>.r5.9.9A<4A>.r5.9.9A<4A>.x5.4.9A<4A>.x5.4.9A<45>.!5.4.9A<45>.^5,.9a.Gm>.^5,.9a.Gm>.^5,.45/45{.45/45{.45/45{,5/E5+,5/E5+{5/K5+{5/P5^{5/P5^+5/U5^+5/Z5!+5/Z5!^5/g5!^5/l5x^5/l5x!5/r5x!5/r5xx5/!5rx5/!5rx5/!5rr5/+5lr5/+5lr5/+5ll5/,5gl5/,5gl5/,5gg5/.95Zg5/.95Zg5/.95ZZ5/.K5UZ5/.K5UU5/.P5UU5/.U5PU5>.,<.aPP5><4<.aPP5><45<.Z5KP5><45<.Z5KK5><95<.Z5KK5><95<.Z5KK5><95<.g5EE5><E5<.g5EE5><E5<.g5E95><K5<.l5995><K5<.l5995><KA<.g5945><PA<.l545><PA<.l5';
