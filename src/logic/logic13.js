window.logic13 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (!(cmd_isset(5))) {
          jumpTo(500);
          break logicSwitch;
        }
        cmd_load_pic(0);
        cmd_draw_pic(0);
        cmd_discard_pic(0);
        cmd_set_horizon(0);
        cmd_status_line_on();
        cmd_accept_input();
        cmd_load_view(130);
        cmd_animate_obj(130);
        cmd_set_view(130, 130);
        cmd_set_loop(130, 0);
        cmd_set_cel(130, 0);
        cmd_ignore_objs(130);
        cmd_ignore_horizon(130);
        cmd_position(130, 74, 12);
        cmd_end_of_loop(130, 70);
        cmd_draw(130);
        cmd_load_view(131);
        cmd_animate_obj(131);
        cmd_set_view(131, 131);
        cmd_set_loop(131, 0);
        cmd_set_cel(131, 0);
        cmd_ignore_blocks(131);
        cmd_ignore_objs(131);
        cmd_position(131, 85, 95);
        cmd_stop_cycling(131);
        cmd_draw(131);
        cmd_set(73);
        cmd_assignn(100, 0);
        cmd_assignn(101, 0);
        if (!(cmd_equaln(1, 8))) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_position(0, 64, 48);
        jumpTo(2);
        break logicSwitch;
      case 501:
        if (!(cmd_equaln(1, 7))) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_assignn(80, 0);
        if (!(cmd_lessn(33, 70))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_assignn(33, 70);
        jumpTo(1);
        break logicSwitch;
      case 503:
        if (!(cmd_greatern(33, 154))) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_assignn(33, 154);
      case 504:
      case 1:
        cmd_position_v(0, 80, 33);
        jumpTo(2);
        break logicSwitch;
      case 502:
        if (!(cmd_equaln(1, 15))) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_position(0, 90, 100);
        cmd_reset(73);
        cmd_set(75);
        cmd_load_view(132);
        cmd_animate_obj(1);
        cmd_set_view(1, 132);
        cmd_set_loop(1, 0);
        cmd_set_cel(1, 14);
        cmd_position(1, 89, 100);
        cmd_draw(1);
        cmd_reverse_loop(1, 79);
        jumpTo(2);
        break logicSwitch;
      case 505:
        cmd_position(0, 72, 100);
      case 2:
        if (!(!cmd_equaln(1, 15))) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_draw(0);
      case 506:
        cmd_assignn(42, 0);
        cmd_load_sound(13);
        cmd_sound(13, 147);
        cmd_show_pic();
      case 500:
        if (cmd_isset(147)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(3);
            break logicSwitch;
          }
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_sound(13, 147);
        }
      case 3:
        if (cmd_isset(79)) {
          cmd_reset(79);
          cmd_erase(1);
          cmd_assignn(6, 0);
          cmd_draw(0);
        }
        if ((cmd_said(15, 115) || cmd_said(15, 116) || cmd_said(15, 115, 117, 116) || cmd_said(15, 116, 117, 115))) {
          cmd_print(m1);
          cmd_print(m2);
jumptoLineArray = [2800];
jumpTo(2800, 13);
break logic;
        }
case 2800:
        if (cmd_said(15, 118)) {
          cmd_print(m3);
jumptoLineArray = [2801];
jumpTo(2801, 13);
break logic;
        }
case 2801:
        if (cmd_said(15, 31)) {
          cmd_print(m4);
          cmd_print(m5);
jumptoLineArray = [2802];
jumpTo(2802, 13);
break logic;
        }
case 2802:
        if (cmd_said(15, 68)) {
          cmd_print(m6);
jumptoLineArray = [2803];
jumpTo(2803, 13);
break logic;
        }
case 2803:
        if (cmd_said(15, 33)) {
          cmd_print(m7);
jumptoLineArray = [2804];
jumpTo(2804, 13);
break logic;
        }
case 2804:
        if (cmd_said(15, 34)) {
          cmd_print(m8);
jumptoLineArray = [2805];
jumpTo(2805, 13);
break logic;
        }
case 2805:
        if (cmd_said(15, 35)) {
          cmd_print(m9);
jumptoLineArray = [2806];
jumpTo(2806, 13);
break logic;
        }
case 2806:
        if (cmd_said(15, 39)) {
          cmd_print(m10);
jumptoLineArray = [2807];
jumpTo(2807, 13);
break logic;
        }
case 2807:
        if (cmd_said(15, 40)) {
          cmd_print(m11);
jumptoLineArray = [2808];
jumpTo(2808, 13);
break logic;
        }
case 2808:
case 2809:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(15)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m12);
jumptoLineArray = [2809, 28000];
ifSkipArray = [true];
jumpTo(2809, 13);
break logic;
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_isset(73)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m13);
jumptoLineArray = [2809, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2809, 13);
break logic;
case 280000:
            jumpTo(4);
            break logicSwitch;
}
          }
case 28001:
ifSkip = ifSkipArrayShift();
          if ((cmd_greatern(101, 0)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(m14);
jumptoLineArray = [2809, 28001, 280000];
ifSkipArray = [true, true];
jumpTo(2809, 13);
break logic;
case 280000:
            jumpTo(4);
            break logicSwitch;
}
          }
          cmd_print(m15);
jumptoLineArray = [2812];
jumpTo(2812, 13);
break logic;
}
        }
case 2812:
      case 4:
        if ((cmd_said(50, 115) || cmd_said(50, 116) || cmd_said(50, 115, 117, 116) || cmd_said(50, 116, 117, 115))) {
          cmd_print(m16);
jumptoLineArray = [2813];
jumpTo(2813, 13);
break logic;
        }
case 2813:
        if (cmd_said(50, 118)) {
          cmd_print(m17);
jumptoLineArray = [2814];
jumpTo(2814, 13);
break logic;
        }
case 2814:
        if (!(cmd_isset(70))) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_reset(70);
        cmd_current_loop(130, 86);
        if (!(cmd_equaln(86, 3))) {
          jumpTo(508);
          break logicSwitch;
        }
        cmd_assignn(86, 0);
        jumpTo(5);
        break logicSwitch;
      case 508:
        cmd_increment(86);
      case 5:
        cmd_set_loop_v(130, 86);
        cmd_set_cel(130, 0);
        cmd_end_of_loop(130, 70);
      case 507:
        if (cmd_isset(73)) {
          if (cmd_equaln(100, 40)) {
            cmd_reset(73);
            cmd_set(74);
            cmd_assignn(100, 0);
            jumpTo(6);
            break logicSwitch;
          }
          cmd_increment(100);
        }
      case 6:
        if (cmd_isset(74)) {
          cmd_reset(74);
          cmd_end_of_loop(131, 75);
        }
        if (cmd_isset(75)) {
          if (cmd_equaln(101, 10)) {
            cmd_reset(75);
            cmd_observe_blocks(0);
            cmd_ignore_objs(131);
            cmd_set_loop(131, 0);
            cmd_last_cel(131, 88);
            cmd_set_cel_v(131, 88);
            cmd_reverse_loop(131, 73);
            cmd_assignn(101, 0);
            jumpTo(7);
            break logicSwitch;
          }
          cmd_reset(75);
          cmd_ignore_blocks(0);
          cmd_observe_objs(131);
          cmd_set_loop(131, 1);
          cmd_set_cel(131, 0);
          cmd_end_of_loop(131, 75);
          cmd_increment(101);
        }
      case 7:
        if (cmd_greatern(101, 0) && cmd_isset(3) && cmd_greatern(31, 92)) {
          if (!cmd_isset(77)) {
            cmd_set(76);
          }
        }
        if (!(cmd_isset(76))) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_reset(76);
        cmd_set(77);
        cmd_get_posn(0, 30, 31);
        cmd_load_view(132);
        cmd_animate_obj(1);
        cmd_set_view(1, 132);
        if (!(cmd_lessn(30, 96))) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_decrement(30);
        cmd_set_loop(1, 0);
        jumpTo(8);
        break logicSwitch;
      case 510:
        cmd_subn(30, 12);
        cmd_set_loop(1, 1);
      case 8:
        cmd_set_cel(1, 0);
        cmd_position_v(1, 30, 31);
        cmd_get_priority(0, 84);
        cmd_increment(84);
        cmd_set_priority_v(1, 84);
        cmd_ignore_blocks(1);
        cmd_ignore_objs(1);
        cmd_erase(0);
        cmd_draw(1);
        cmd_end_of_loop(1, 78);
        if (!(!cmd_isset(230))) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_set(230);
        cmd_increment(3);
      case 511:
      case 509:
        if (cmd_isset(78)) {
          cmd_reset(77);
          cmd_reset(78);
          cmd_new_room(15);
          if (AGI.break_all_logics) return;
        }
        if (!cmd_isset(71) && cmd_isset(3) && cmd_lessn(31, 48)) {
          cmd_get_posn(0, 30, 31);
          cmd_load_view(54);
          cmd_animate_obj(54);
          cmd_set_view(54, 54);
          cmd_last_cel(0, 80);
          cmd_decrement(80);
          cmd_set_cel_v(54, 80);
          cmd_decrement(31);
          cmd_position_v(54, 30, 31);
          cmd_ignore_blocks(54);
          cmd_draw(54);
          cmd_assignn(80, 2);
          cmd_cycle_time(54, 80);
          cmd_end_of_loop(54, 72);
          cmd_erase(0);
          cmd_set(71);
        }
        if (cmd_isset(72)) {
          cmd_reset(72);
          cmd_new_room(8);
          if (AGI.break_all_logics) return;
        }
        if (cmd_equaln(2, 4)) {
          cmd_new_room(7);
          if (AGI.break_all_logics) return;
        }
        return;

    }
  }
}
MESSAGES[13] = [
  "",
  "It's the infamous pole or vortex...",
  "...So that's what it is.",
  "A bird of prey circles in the distance.",
  "Looks like a dream.",
  "Actually, it blocks your way.",
  "Isn't that special. No, not really.",
  "A rock; mind you, one that does not roll.",
  "So blue... There is even a bird flying around and around and around and around and...",
  "Happy little clouds. Clouds are very, very free.",
  "It must lead somewhere.",
  "You feel that it's beneath you.",
  "Where does that pathway go to?",
  "Hey, there's a pole!",
  "Hey, there's a vortex!",
  "Hey, there's a pole or vortex!",
  "Get it? More like it gets you.",
  "Talk about something being out of reach."
];
CONTROLS[13] = "?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4l5><.XL.)l5><.x5.^l5><.!5.!g5><.^5.!g5><.^5.!Z5><.{5.xPA><.,5.xEA/95.x4A/K5.x/Z5.r/Z5.r/Z5.r/Z5.r/Z5.r/g5.l/g5.l/g5.l/g5.l/g5.l/l5.g/l5.g/l5.g/l5.g/l5.g/r5.Z/r5.Z/r5.Z/r5.Z/r5.Z/x5.U/x5.U/x5.U/x5.U/x5.U/x5.U/!5.P/!5.P/!5.P/!5.P/!5.P/!5.P/!5.P/!5.P/^5.K/^5.K/^5.K><K6<l5.K><K6<l5.K>.U[6[.x5.K>.U[6[.x5.K>.U[6[.x5.K>.U.).!5.E/+5.E/+5.E/+5.E/+5.E/+5.E/{5.9/{5.9/{5.9/{5.9/,5.4/,5.4/,5.4/,5.4/.45,/.45,/.45,/.45,/.95{/.95{/.95{/.95{/.95{/.95{/.95{/.E5+/.E5+/.E5+/.E5+/.E5+/.E5+/.E5+/.E5+/.K5^/.K5^/.K5^/.K5^/.K5^/.K5^/.K5^/.K5^/.P5!/.P5!/.P5!/.P5!/.P5!/.P5!/.P5!/.P5!/.PAx/.PAx/.PAx/.PAx/.PAx/.PAx/.PAx/.PAx/.P595r/.P595r/.P595r/.P595r/.P595r/.P595r/.P595r/.P595r/.P5E5l/.P5E5l/.P5E5l/.P5E5l/.P5E5l";
