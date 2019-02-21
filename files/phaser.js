'use strict';

function r() {
    return function() {}
}

function ba(e) {
    return function() {
        return this[e]
    }
}

function x(e) {
    return function() {
        return e
    }
}
var ea, fa, y, ga, z, A, ha, ka, la, ma, na, oa, pa, D, qa, ra, sa, ta, ua, va, wa, xa, ya, E, za, Aa, L, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, O, Hb, Ib = {},
    Jb = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(e) {
    return e.__proto__
} : function(e) {
    return e.constructor.prototype
});
(function() {
    function e(h, g, n, a) {
        this.set(h, g, n, a)
    }

    function k() {
        this.sb = this.rb = this.ub = this.tb = this.Bb = this.Ab = this.Ia = this.Ha = 0
    }

    function c(h, g, n, a) {
        h < g ? n < a ? (v = h < n ? h : n, m = g > a ? g : a) : (v = h < a ? h : a, m = g > n ? g : n) : n < a ? (v = g < n ? g : n, m = h > a ? h : a) : (v = g < a ? g : a, m = h > n ? h : n)
    }

    function d() {
        this.Dd = this.hd = null;
        this.Ef = 0;
        w && (this.hd = new Set);
        this.Vf = [];
        this.Xd = !0
    }

    function b(h) {
        p[n++] = h
    }

    function a() {
        this.mb = this.nj = this.y = this.Oj = 0
    }

    function l(h) {
        this.Wa = [];
        this.Lh = this.Nh = this.Oh = this.Mh = 0;
        this.nh(h)
    }

    function f(h, g) {
        this.Lp = h;
        this.Kp = g;
        this.cells = {}
    }

    function q(h, n, a) {
        var u;
        return g.length ? (u = g.pop(), u.kr = h, u.x = n, u.y = a, u) : new ea(h, n, a)
    }

    function s(h, g, n) {
        this.kr = h;
        this.x = g;
        this.y = n;
        this.$g = new fa
    }
    y = function(h) {
        window.console && window.console.log && window.console.log(h)
    };
    ga = function(h) {
        return "undefined" === typeof h
    };
    z = function(h) {
        return "number" === typeof h
    };
    A = function(h) {
        return "string" === typeof h
    };
    ha = function(h) {
        return 0 < h && 0 === (h - 1 & h)
    };
    ka = function(h) {
        --h;
        for (var g = 1; 32 > g; g <<= 1) h |= h >> g;
        return h + 1
    };
    la = function(h) {
        return 0 > h ? -h :
            h
    };
    ma = function(h, g) {
        return h > g ? h : g
    };
    na = function(h, g) {
        return h < g ? h : g
    };
    oa = Math.PI;
    pa = function(h) {
        return h + 0.5 | 0
    };
    D = function(h) {
        return 0 <= h ? h | 0 : (h | 0) - 1
    };
    qa = function(h) {
        var g = h | 0;
        return g === h ? g : g + 1
    };
    ra = function(h, g, n, a, u, f, l, b) {
        var c, q, d, s;
        h < n ? (q = h, c = n) : (q = n, c = h);
        u < l ? (s = u, d = l) : (s = l, d = u);
        if (c < s || q > d) return !1;
        g < a ? (q = g, c = a) : (q = a, c = g);
        f < b ? (s = f, d = b) : (s = b, d = f);
        if (c < s || q > d) return !1;
        c = u - h + l - n;
        q = f - g + b - a;
        h = n - h;
        g = a - g;
        u = l - u;
        f = b - f;
        b = la(g * u - f * h);
        return la(u * q - f * c) > b ? !1 : la(h * q - g * c) <= b
    };
    e.prototype.set = function(h, g,
        n, a) {
        this.left = h;
        this.top = g;
        this.right = n;
        this.bottom = a
    };
    e.prototype.copy = function(h) {
        this.left = h.left;
        this.top = h.top;
        this.right = h.right;
        this.bottom = h.bottom
    };
    e.prototype.width = function() {
        return this.right - this.left
    };
    e.prototype.height = function() {
        return this.bottom - this.top
    };
    e.prototype.offset = function(h, g) {
        this.left += h;
        this.top += g;
        this.right += h;
        this.bottom += g;
        return this
    };
    e.prototype.normalize = function() {
        var h = 0;
        this.left > this.right && (h = this.left, this.left = this.right, this.right = h);
        this.top > this.bottom &&
            (h = this.top, this.top = this.bottom, this.bottom = h)
    };
    e.prototype.rr = function(h) {
        return !(h.right < this.left || h.bottom < this.top || h.left > this.right || h.top > this.bottom)
    };
    e.prototype.sr = function(h, g, n) {
        return !(h.right + g < this.left || h.bottom + n < this.top || h.left + g > this.right || h.top + n > this.bottom)
    };
    e.prototype.Jb = function(h, g) {
        return h >= this.left && h <= this.right && g >= this.top && g <= this.bottom
    };
    e.prototype.iq = function(h) {
        return this.left === h.left && this.top === h.top && this.right === h.right && this.bottom === h.bottom
    };
    sa = e;
    k.prototype.mh = function(h) {
        this.Ha = h.left;
        this.Ia = h.top;
        this.Ab = h.right;
        this.Bb = h.top;
        this.tb = h.right;
        this.ub = h.bottom;
        this.rb = h.left;
        this.sb = h.bottom
    };
    k.prototype.po = function(h, g) {
        if (0 === g) this.mh(h);
        else {
            var n = Math.sin(g),
                a = Math.cos(g),
                u = h.left * n,
                f = h.top * n,
                l = h.right * n,
                n = h.bottom * n,
                b = h.left * a,
                c = h.top * a,
                q = h.right * a,
                a = h.bottom * a;
            this.Ha = b - f;
            this.Ia = c + u;
            this.Ab = q - f;
            this.Bb = c + l;
            this.tb = q - n;
            this.ub = a + l;
            this.rb = b - n;
            this.sb = a + u
        }
    };
    k.prototype.offset = function(h, g) {
        this.Ha += h;
        this.Ia += g;
        this.Ab += h;
        this.Bb +=
            g;
        this.tb += h;
        this.ub += g;
        this.rb += h;
        this.sb += g;
        return this
    };
    var v = 0,
        m = 0;
    k.prototype.Bm = function(h) {
        c(this.Ha, this.Ab, this.tb, this.rb);
        h.left = v;
        h.right = m;
        c(this.Ia, this.Bb, this.ub, this.sb);
        h.top = v;
        h.bottom = m
    };
    k.prototype.Jb = function(h, g) {
        var n = this.Ab - this.Ha,
            a = this.Bb - this.Ia,
            u = this.tb - this.Ha,
            f = this.ub - this.Ia,
            l = h - this.Ha,
            b = g - this.Ia,
            c = n * n + a * a,
            q = n * u + a * f,
            a = n * l + a * b,
            d = u * u + f * f,
            s = u * l + f * b,
            e = 1 / (c * d - q * q),
            n = (d * a - q * s) * e,
            c = (c * s - q * a) * e;
        if (0 <= n && 0 < c && 1 > n + c) return !0;
        n = this.rb - this.Ha;
        a = this.sb - this.Ia;
        c = n * n + a *
            a;
        q = n * u + a * f;
        a = n * l + a * b;
        e = 1 / (c * d - q * q);
        n = (d * a - q * s) * e;
        c = (c * s - q * a) * e;
        return 0 <= n && 0 < c && 1 > n + c
    };
    k.prototype.Ud = function(h, g) {
        if (g) switch (h) {
            case 0:
                return this.Ha;
            case 1:
                return this.Ab;
            case 2:
                return this.tb;
            case 3:
                return this.rb;
            case 4:
                return this.Ha;
            default:
                return this.Ha
        } else switch (h) {
            case 0:
                return this.Ia;
            case 1:
                return this.Bb;
            case 2:
                return this.ub;
            case 3:
                return this.sb;
            case 4:
                return this.Ia;
            default:
                return this.Ia
        }
    };
    k.prototype.In = function() {
        return (this.Ha + this.Ab + this.tb + this.rb) / 4
    };
    k.prototype.Jn = function() {
        return (this.Ia +
            this.Bb + this.ub + this.sb) / 4
    };
    k.prototype.nn = function(h) {
        var g = h.In(),
            n = h.Jn();
        if (this.Jb(g, n)) return !0;
        g = this.In();
        n = this.Jn();
        if (h.Jb(g, n)) return !0;
        var a, u, f, l, b, c, q, d;
        for (q = 0; 4 > q; q++)
            for (d = 0; 4 > d; d++)
                if (g = this.Ud(q, !0), n = this.Ud(q, !1), a = this.Ud(q + 1, !0), u = this.Ud(q + 1, !1), f = h.Ud(d, !0), l = h.Ud(d, !1), b = h.Ud(d + 1, !0), c = h.Ud(d + 1, !1), ra(g, n, a, u, f, l, b, c)) return !0;
        return !1
    };
    ta = k;
    ua = function(h, g) {
        for (var n in g) g.hasOwnProperty(n) && (h[n] = g[n]);
        return h
    };
    va = function(h, g) {
        var n, a;
        g = D(g);
        if (!(0 > g || g >= h.length))
            if (0 ===
                g) h.shift();
            else if (g === h.length - 1) h.pop();
        else {
            n = g;
            for (a = h.length - 1; n < a; n++) h[n] = h[n + 1];
            h.length = a
        }
    };
    wa = function(h, g) {
        h.length = g.length;
        var n, a;
        n = 0;
        for (a = g.length; n < a; n++) h[n] = g[n]
    };
    xa = function(h, g) {
        h.push.apply(h, g)
    };
    ya = function(h, g) {
        var n = h.indexOf(g); - 1 !== n && va(h, n)
    };
    E = function(h) {
        return h / (180 / oa)
    };
    za = function(h) {
        return h * (180 / oa)
    };
    Aa = function(h) {
        h %= 360;
        0 > h && (h += 360);
        return h
    };
    L = function(h) {
        h %= 2 * oa;
        0 > h && (h += 2 * oa);
        return h
    };
    Ba = function(h) {
        return Aa(za(h))
    };
    Ca = function(h) {
        return L(E(h))
    };
    Da = function(h,
        g, n, a) {
        return Math.atan2(a - g, n - h)
    };
    Ea = function(h, g) {
        if (h === g) return 0;
        var n = Math.sin(h),
            a = Math.cos(h),
            u = Math.sin(g),
            f = Math.cos(g),
            n = n * u + a * f;
        return 1 <= n ? 0 : -1 >= n ? oa : Math.acos(n)
    };
    Fa = function(h, g, n) {
        var a = Math.sin(h),
            u = Math.cos(h),
            f = Math.sin(g),
            l = Math.cos(g);
        return Math.acos(a * f + u * l) > n ? 0 < u * f - a * l ? L(h + n) : L(h - n) : L(g)
    };
    Ga = function(h, g) {
        var n = Math.sin(h),
            a = Math.cos(h),
            u = Math.sin(g),
            f = Math.cos(g);
        return 0 >= a * u - n * f
    };
    Ha = function(h, g, n, a) {
        h = n - h;
        g = a - g;
        return Math.sqrt(h * h + g * g)
    };
    Ia = function(h, g) {
        return !h !== !g
    };
    Ja = function(h) {
        for (var g in h)
            if (h.hasOwnProperty(g)) return !0;
        return !1
    };
    La = function(h) {
        for (var g in h) h.hasOwnProperty(g) && delete h[g]
    };
    var t = +new Date;
    Ma = function() {
        if ("undefined" !== typeof window.performance) {
            var h = window.performance;
            if ("undefined" !== typeof h.now) return h.now();
            if ("undefined" !== typeof h.webkitNow) return h.webkitNow();
            if ("undefined" !== typeof h.mozNow) return h.mozNow();
            if ("undefined" !== typeof h.msNow) return h.msNow()
        }
        return Date.now() - t
    };
    var w = ("undefined" === typeof window || !window.c2ejecta) &&
        "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    d.prototype.contains = function(h) {
        return this.Pc() ? !1 : w ? this.hd.has(h) : this.Dd && this.Dd.hasOwnProperty(h)
    };
    d.prototype.add = function(h) {
        if (w) this.hd.has(h) || (this.hd.add(h), this.Xd = !1);
        else {
            var g = h.toString(),
                n = this.Dd;
            n ? n.hasOwnProperty(g) || (n[g] = h, this.Ef++, this.Xd = !1) : (this.Dd = {}, this.Dd[g] = h, this.Ef = 1, this.Xd = !1)
        }
    };
    d.prototype.remove = function(h) {
        if (!this.Pc())
            if (w) this.hd.has(h) && (this.hd["delete"](h), this.Xd = !1);
            else if (this.Dd) {
            h =
                h.toString();
            var g = this.Dd;
            g.hasOwnProperty(h) && (delete g[h], this.Ef--, this.Xd = !1)
        }
    };
    d.prototype.clear = function() {
        this.Pc() || (w ? this.hd.clear() : (this.Dd = null, this.Ef = 0), this.Vf.length = 0, this.Xd = !0)
    };
    d.prototype.Pc = function() {
        return 0 === this.count()
    };
    d.prototype.count = function() {
        return w ? this.hd.size : this.Ef
    };
    var p = null,
        n = 0;
    d.prototype.zs = function() {
        if (!this.Xd) {
            if (w) this.Vf.length = this.hd.size, p = this.Vf, n = 0, this.hd.forEach(b), p = null, n = 0;
            else {
                var h = this.Vf;
                h.length = this.Ef;
                var g, a = 0,
                    u = this.Dd;
                if (u)
                    for (g in u) u.hasOwnProperty(g) &&
                        (h[a++] = u[g])
            }
            this.Xd = !0
        }
    };
    d.prototype.cf = function() {
        this.zs();
        return this.Vf
    };
    fa = d;
    a.prototype.add = function(g) {
        this.y = g - this.Oj;
        this.nj = this.mb + this.y;
        this.Oj = this.nj - this.mb - this.y;
        this.mb = this.nj
    };
    a.prototype.reset = function() {
        this.mb = this.nj = this.y = this.Oj = 0
    };
    Na = a;
    Oa = function(g) {
        return g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    l.prototype.nh = function(g) {
        this.eo = g;
        this.Tc = g.length / 2;
        this.Wa.length = g.length;
        this.Qh = this.Rh = -1;
        this.Dm = 0
    };
    l.prototype.Cf = function() {
        return !this.eo.length
    };
    l.prototype.Ea =
        function() {
            for (var g = this.Wa, n = g[0], a = n, u = g[1], f = u, l, b, c = 1, q = this.Tc; c < q; ++c) b = 2 * c, l = g[b], b = g[b + 1], l < n && (n = l), l > a && (a = l), b < u && (u = b), b > f && (f = b);
            this.Mh = n;
            this.Nh = a;
            this.Oh = u;
            this.Lh = f
        };
    l.prototype.mh = function(g, n, a) {
        this.Wa.length = 8;
        this.Tc = 4;
        var u = this.Wa;
        u[0] = g.left - n;
        u[1] = g.top - a;
        u[2] = g.right - n;
        u[3] = g.top - a;
        u[4] = g.right - n;
        u[5] = g.bottom - a;
        u[6] = g.left - n;
        u[7] = g.bottom - a;
        this.Rh = g.right - g.left;
        this.Qh = g.bottom - g.top;
        this.Ea()
    };
    l.prototype.Qf = function(g, n, a, u, f) {
        this.Wa.length = 8;
        this.Tc = 4;
        var l = this.Wa;
        l[0] = g.Ha - n;
        l[1] = g.Ia - a;
        l[2] = g.Ab - n;
        l[3] = g.Bb - a;
        l[4] = g.tb - n;
        l[5] = g.ub - a;
        l[6] = g.rb - n;
        l[7] = g.sb - a;
        this.Rh = u;
        this.Qh = f;
        this.Ea()
    };
    l.prototype.oo = function(g) {
        this.Tc = g.Tc;
        wa(this.Wa, g.Wa);
        this.Mh = g.Mh;
        this.Oh - g.Oh;
        this.Nh = g.Nh;
        this.Lh = g.Lh
    };
    l.prototype.of = function(g, n, a) {
        if (this.Rh !== g || this.Qh !== n || this.Dm !== a) {
            this.Rh = g;
            this.Qh = n;
            this.Dm = a;
            var u, f, l, b, c, q = 0,
                d = 1,
                s = this.eo,
                e = this.Wa;
            0 !== a && (q = Math.sin(a), d = Math.cos(a));
            a = 0;
            for (l = this.Tc; a < l; a++) u = 2 * a, f = u + 1, b = s[u] * g, c = s[f] * n, e[u] = b * d - c * q, e[f] = c * d + b * q;
            this.Ea()
        }
    };
    l.prototype.Jb = function(g, n) {
        var a = this.Wa;
        if (g === a[0] && n === a[1]) return !0;
        var u, f, l, b = this.Tc,
            c = this.Mh - 110,
            q = this.Oh - 101,
            d = this.Nh + 131,
            s = this.Lh + 120,
            e, m, k = 0,
            w = 0;
        for (u = 0; u < b; u++) f = 2 * u, l = 2 * ((u + 1) % b), e = a[f], f = a[f + 1], m = a[l], l = a[l + 1], ra(c, q, g, n, e, f, m, l) && k++, ra(d, s, g, n, e, f, m, l) && w++;
        return 1 === k % 2 || 1 === w % 2
    };
    l.prototype.ug = function(g, n, a) {
        var u = g.Wa,
            f = this.Wa;
        if (this.Jb(u[0] + n, u[1] + a) || g.Jb(f[0] - n, f[1] - a)) return !0;
        var l, b, c, q, d, s, e, m, k, w, v, p;
        l = 0;
        for (q = this.Tc; l < q; l++)
            for (b = 2 * l, c = 2 * ((l + 1) % q),
                m = f[b], b = f[b + 1], k = f[c], w = f[c + 1], c = 0, e = g.Tc; c < e; c++)
                if (d = 2 * c, s = 2 * ((c + 1) % e), v = u[d] + n, d = u[d + 1] + a, p = u[s] + n, s = u[s + 1] + a, ra(m, b, k, w, v, d, p, s)) return !0;
        return !1
    };
    Pa = l;
    f.prototype.mk = function(g, n, a) {
        var u;
        u = this.cells[g];
        return u ? (u = u[n]) ? u : a ? (u = q(this, g, n), this.cells[g][n] = u) : null : a ? (u = q(this, g, n), this.cells[g] = {}, this.cells[g][n] = u) : null
    };
    f.prototype.Hh = function(g) {
        return D(g / this.Lp)
    };
    f.prototype.Ih = function(g) {
        return D(g / this.Kp)
    };
    f.prototype.update = function(n, a, u) {
        var f, l, b, c, q;
        if (a)
            for (f = a.left, l = a.right; f <=
                l; ++f)
                for (b = a.top, c = a.bottom; b <= c; ++b)
                    if (!u || !u.Jb(f, b))
                        if (q = this.mk(f, b, !1)) q.remove(n), q.Pc() && (q.$g.clear(), 1E3 > g.length && g.push(q), this.cells[f][b] = null);
        if (u)
            for (f = u.left, l = u.right; f <= l; ++f)
                for (b = u.top, c = u.bottom; b <= c; ++b) a && a.Jb(f, b) || this.mk(f, b, !0).qr(n)
    };
    f.prototype.ho = function(g, n) {
        var a, u, f, l, b, c;
        a = this.Hh(g.left);
        f = this.Ih(g.top);
        u = this.Hh(g.right);
        for (b = this.Ih(g.bottom); a <= u; ++a)
            for (l = f; l <= b; ++l)(c = this.mk(a, l, !1)) && c.dq(n)
    };
    Qa = f;
    var g = [];
    s.prototype.Pc = function() {
        return this.$g.Pc()
    };
    s.prototype.qr = function(g) {
        this.$g.add(g)
    };
    s.prototype.remove = function(g) {
        this.$g.remove(g)
    };
    s.prototype.dq = function(g) {
        xa(g, this.$g.cf())
    };
    ea = s;
    var u = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    Ra = function(g) {
        return 0 >= g || 11 <= g ? "source-over" : u[g - 1]
    };
    Sa = function(g, n, a) {
        if (a) switch (g.yb = a.ONE, g.xb = a.ONE_MINUS_SRC_ALPHA, n) {
            case 1:
                g.yb = a.ONE;
                g.xb = a.ONE;
                break;
            case 3:
                g.yb = a.ONE;
                g.xb = a.ZERO;
                break;
            case 4:
                g.yb = a.ONE_MINUS_DST_ALPHA;
                g.xb = a.ONE;
                break;
            case 5:
                g.yb = a.DST_ALPHA;
                g.xb = a.ZERO;
                break;
            case 6:
                g.yb = a.ZERO;
                g.xb = a.SRC_ALPHA;
                break;
            case 7:
                g.yb = a.ONE_MINUS_DST_ALPHA;
                g.xb = a.ZERO;
                break;
            case 8:
                g.yb = a.ZERO;
                g.xb = a.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                g.yb = a.DST_ALPHA;
                g.xb = a.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                g.yb = a.ONE_MINUS_DST_ALPHA, g.xb = a.SRC_ALPHA
        }
    };
    Ta = function(g) {
        return pa(1E6 * g) / 1E6
    };
    Ua = function(g, n) {
        return "string" !== typeof g || "string" !== typeof n || g.length !== n.length ? !1 : g === n ? !0 : g.toLowerCase() === n.toLowerCase()
    }
})();
var Kb = "undefined" !== typeof Float32Array ? Float32Array : Array;

function Lb(e) {
    var k = new Kb(3);
    e && (k[0] = e[0], k[1] = e[1], k[2] = e[2]);
    return k
}

function Mb(e) {
    var k = new Kb(16);
    e && (k[0] = e[0], k[1] = e[1], k[2] = e[2], k[3] = e[3], k[4] = e[4], k[5] = e[5], k[6] = e[6], k[7] = e[7], k[8] = e[8], k[9] = e[9], k[10] = e[10], k[11] = e[11], k[12] = e[12], k[13] = e[13], k[14] = e[14], k[15] = e[15]);
    return k
}

function Nb(e, k) {
    k[0] = e[0];
    k[1] = e[1];
    k[2] = e[2];
    k[3] = e[3];
    k[4] = e[4];
    k[5] = e[5];
    k[6] = e[6];
    k[7] = e[7];
    k[8] = e[8];
    k[9] = e[9];
    k[10] = e[10];
    k[11] = e[11];
    k[12] = e[12];
    k[13] = e[13];
    k[14] = e[14];
    k[15] = e[15]
}

function Ob(e, k) {
    var c = k[0],
        d = k[1];
    k = k[2];
    e[0] *= c;
    e[1] *= c;
    e[2] *= c;
    e[3] *= c;
    e[4] *= d;
    e[5] *= d;
    e[6] *= d;
    e[7] *= d;
    e[8] *= k;
    e[9] *= k;
    e[10] *= k;
    e[11] *= k
}

function Pb(e, k, c, d) {
    d || (d = Mb());
    var b, a, l, f, q, s, v, m, t = e[0],
        w = e[1];
    e = e[2];
    a = c[0];
    l = c[1];
    b = c[2];
    c = k[1];
    s = k[2];
    t === k[0] && w === c && e === s ? (e = d, e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1) : (c = t - k[0], s = w - k[1], v = e - k[2], m = 1 / Math.sqrt(c * c + s * s + v * v), c *= m, s *= m, v *= m, k = l * v - b * s, b = b * c - a * v, a = a * s - l * c, (m = Math.sqrt(k * k + b * b + a * a)) ? (m = 1 / m, k *= m, b *= m, a *= m) : a = b = k = 0, l = s * a - v * b, f = v * k - c * a, q = c * b - s * k, (m = Math.sqrt(l * l + f * f + q * q)) ? (m = 1 / m, l *= m, f *= m, q *= m) : q = f = l = 0,
        d[0] = k, d[1] = l, d[2] = c, d[3] = 0, d[4] = b, d[5] = f, d[6] = s, d[7] = 0, d[8] = a, d[9] = q, d[10] = v, d[11] = 0, d[12] = -(k * t + b * w + a * e), d[13] = -(l * t + f * w + q * e), d[14] = -(c * t + s * w + v * e), d[15] = 1)
}
(function() {
    function e(a) {
        this.vi = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Em = Lb([0, 0, 100]);
        this.Gn = Lb([0, 0, 0]);
        this.Ho = Lb([0, 1, 0]);
        this.cm = Lb([1, 1, 1]);
        this.Wk = Mb();
        this.Gc = Mb();
        this.yn = Mb();
        this.Yj = Mb();
        this.G = a;
        this.jn()
    }

    function k(a, l, f) {
        this.G = a;
        this.oh = l;
        this.name = f;
        this.Fc = a.getAttribLocation(l, "aPos");
        this.ie = a.getAttribLocation(l, "aTex");
        this.En = a.getUniformLocation(l, "matP");
        this.Hf = a.getUniformLocation(l, "matMV");
        this.If = a.getUniformLocation(l,
            "opacity");
        this.Fn = a.getUniformLocation(l, "samplerFront");
        this.Sg = a.getUniformLocation(l, "samplerBack");
        this.Pe = a.getUniformLocation(l, "destStart");
        this.Oe = a.getUniformLocation(l, "destEnd");
        this.Uk = a.getUniformLocation(l, "seconds");
        this.Tk = a.getUniformLocation(l, "pixelWidth");
        this.Sk = a.getUniformLocation(l, "pixelHeight");
        this.Rg = a.getUniformLocation(l, "layerScale");
        this.Qg = a.getUniformLocation(l, "layerAngle");
        this.Tg = a.getUniformLocation(l, "viewOrigin");
        this.nr = !!(this.Tk || this.Sk || this.Uk || this.Sg ||
            this.Pe || this.Oe || this.Rg || this.Qg || this.Tg);
        this.If && a.uniform1f(this.If, 1);
        this.Fn && a.uniform1i(this.Fn, 0);
        this.Sg && a.uniform1i(this.Sg, 1);
        this.Pe && a.uniform2f(this.Pe, 0, 0);
        this.Oe && a.uniform2f(this.Oe, 1, 1);
        this.Rg && a.uniform1f(this.Rg, 1);
        this.Qg && a.uniform1f(this.Qg, 0);
        this.Tg && a.uniform2f(this.Tg, 0, 0);
        this.Ee = !1
    }

    function c(a, l) {
        this.type = a;
        this.I = l;
        this.G = l.G;
        this.bd = this.Jc = this.Wn = 0;
        this.oa = this.Xc = null;
        this.qo = []
    }
    e.prototype.jn = function() {
        var a = this.G,
            l;
        this.zn = 1;
        this.Me = this.ee = null;
        this.Km =
            1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.DEPTH_TEST);
        this.An = a.ONE;
        this.xn = a.ONE_MINUS_SRC_ALPHA;
        this.kl = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.kl);
        this.Bh = Array(4);
        this.uh = Array(4);
        for (l = 0; 4 > l; l++) this.Bh[l] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Bh[l]), this.uh[l] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.uh[l]);
        this.td = 0;
        this.pr = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,
            this.pr);
        this.Zl = new Float32Array(16E3);
        this.Nl = new Float32Array(16E3);
        this.Ur = new Float32Array(32E3);
        for (var f = new Uint16Array(12E3), b = l = 0; 12E3 > l;) f[l++] = b, f[l++] = b + 1, f[l++] = b + 2, f[l++] = b, f[l++] = b + 2, f[l++] = b + 3, b += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, f, a.STATIC_DRAW);
        this.ll = this.nd = 0;
        this.Ya = [];
        l = this.Uj({
                src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
            },
            "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", "<default>");
        this.Ya.push(l);
        l = this.Uj({
                src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
            }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}",
            "<point>");
        this.Ya.push(l);
        for (var c in Qb) Qb.hasOwnProperty(c) && this.Ya.push(this.Uj(Qb[c], "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", c));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.Wd = [];
        this.qd = 0;
        this.cc = !1;
        this.Lm = this.Gg = -1;
        this.gg = null;
        this.Gq = a.createFramebuffer();
        this.ko =
            null;
        this.ue = Lb([0, 0, 0]);
        this.kd(0)
    };
    e.prototype.Uj = function(a, l, f) {
        var b = this.G,
            c = b.createShader(b.FRAGMENT_SHADER);
        b.shaderSource(c, a.src);
        b.compileShader(c);
        if (!b.getShaderParameter(c, b.COMPILE_STATUS)) return b.deleteShader(c), null;
        var d = b.createShader(b.VERTEX_SHADER);
        b.shaderSource(d, l);
        b.compileShader(d);
        if (!b.getShaderParameter(d, b.COMPILE_STATUS)) return b.deleteShader(c), b.deleteShader(d), null;
        l = b.createProgram();
        b.attachShader(l, c);
        b.attachShader(l, d);
        b.linkProgram(l);
        if (!b.getProgramParameter(l,
                b.LINK_STATUS)) return b.deleteShader(c), b.deleteShader(d), b.deleteProgram(l), null;
        b.useProgram(l);
        b.deleteShader(c);
        b.deleteShader(d);
        f = new k(b, l, f);
        f.bi = a.bi || 0;
        f.ci = a.ci || 0;
        f.Vj = !!a.Vj;
        f.Ij = !!a.Ij;
        f.R = a.R || [];
        a = 0;
        for (c = f.R.length; a < c; a++) f.R[a][1] = b.getUniformLocation(l, f.R[a][0]), b.uniform1f(f.R[a][1], 0);
        return f
    };
    e.prototype.pk = function(a) {
        var b, f;
        b = 0;
        for (f = this.Ya.length; b < f; b++)
            if (this.Ya[b].name === a) return b;
        return -1
    };
    e.prototype.co = function(a, b, f) {
        var c = this.Gc,
            d = this.Wk,
            e = [0, 0, 0, 0, 0, 0, 0,
                0
            ];
        e[0] = c[0] * a + c[4] * b + c[12];
        e[1] = c[1] * a + c[5] * b + c[13];
        e[2] = c[2] * a + c[6] * b + c[14];
        e[3] = c[3] * a + c[7] * b + c[15];
        e[4] = d[0] * e[0] + d[4] * e[1] + d[8] * e[2] + d[12] * e[3];
        e[5] = d[1] * e[0] + d[5] * e[1] + d[9] * e[2] + d[13] * e[3];
        e[6] = d[2] * e[0] + d[6] * e[1] + d[10] * e[2] + d[14] * e[3];
        e[7] = -e[2];
        0 !== e[7] && (e[7] = 1 / e[7], e[4] *= e[7], e[5] *= e[7], e[6] *= e[7], f[0] = (0.5 * e[4] + 0.5) * this.width, f[1] = (0.5 * e[5] + 0.5) * this.height)
    };
    e.prototype.Pf = function(a, b, f) {
        if (this.width !== a || this.height !== b || f) {
            this.$d();
            this.width = a;
            this.height = b;
            this.G.viewport(0, 0,
                a, b);
            b = a / b;
            var c = this.Wk,
                d;
            d = 1 * Math.tan(45 * Math.PI / 360);
            b *= d;
            a = -b;
            f = -d;
            c || (c = Mb());
            var e = b - a,
                m = d - f;
            c[0] = 2 / e;
            c[1] = 0;
            c[2] = 0;
            c[3] = 0;
            c[4] = 0;
            c[5] = 2 / m;
            c[6] = 0;
            c[7] = 0;
            c[8] = (b + a) / e;
            c[9] = (d + f) / m;
            c[10] = -1001 / 999;
            c[11] = -1;
            c[12] = 0;
            c[13] = 0;
            c[14] = -2E3 / 999;
            c[15] = 0;
            Pb(this.Em, this.Gn, this.Ho, this.Gc);
            a = [0, 0];
            b = [0, 0];
            this.co(0, 0, a);
            this.co(1, 1, b);
            this.cm[0] = 1 / (b[0] - a[0]);
            this.cm[1] = -1 / (b[1] - a[1]);
            a = 0;
            for (b = this.Ya.length; a < b; a++) f = this.Ya[a], f.Ee = !1, f.En && (this.G.useProgram(f.oh), this.G.uniformMatrix4fv(f.En, !1, this.Wk));
            this.G.useProgram(this.Ya[this.Gg].oh);
            this.G.bindTexture(this.G.TEXTURE_2D, null);
            this.G.activeTexture(this.G.TEXTURE1);
            this.G.bindTexture(this.G.TEXTURE_2D, null);
            this.G.activeTexture(this.G.TEXTURE0);
            this.Me = this.ee = null
        }
    };
    e.prototype.gd = function() {
        Pb(this.Em, this.Gn, this.Ho, this.Gc);
        Ob(this.Gc, this.cm)
    };
    e.prototype.translate = function(a, b) {
        if (0 !== a || 0 !== b) {
            this.ue[0] = a;
            this.ue[1] = b;
            this.ue[2] = 0;
            var f = this.Gc,
                c = this.ue,
                d = c[0],
                e = c[1],
                c = c[2];
            f[12] = f[0] * d + f[4] * e + f[8] * c + f[12];
            f[13] = f[1] * d + f[5] * e + f[9] *
                c + f[13];
            f[14] = f[2] * d + f[6] * e + f[10] * c + f[14];
            f[15] = f[3] * d + f[7] * e + f[11] * c + f[15]
        }
    };
    e.prototype.scale = function(a, b) {
        if (1 !== a || 1 !== b) this.ue[0] = a, this.ue[1] = b, this.ue[2] = 1, Ob(this.Gc, this.ue)
    };
    e.prototype.yl = function(a) {
        if (0 !== a) {
            var b = this.Gc,
                f, c = Math.sin(a);
            a = Math.cos(a);
            var d = b[0],
                e = b[1],
                m = b[2],
                k = b[3],
                w = b[4],
                p = b[5],
                n = b[6],
                g = b[7];
            f ? b !== f && (f[8] = b[8], f[9] = b[9], f[10] = b[10], f[11] = b[11], f[12] = b[12], f[13] = b[13], f[14] = b[14], f[15] = b[15]) : f = b;
            f[0] = d * a + w * c;
            f[1] = e * a + p * c;
            f[2] = m * a + n * c;
            f[3] = k * a + g * c;
            f[4] = d * -c + w * a;
            f[5] =
                e * -c + p * a;
            f[6] = m * -c + n * a;
            f[7] = k * -c + g * a
        }
    };
    e.prototype.md = function() {
        for (var a = !1, b = 0; 16 > b; b++)
            if (this.yn[b] !== this.Gc[b]) {
                a = !0;
                break
            }
        a && (a = this.Uc(), a.type = 5, a.oa ? Nb(this.Gc, a.oa) : a.oa = Mb(this.Gc), Nb(this.Gc, this.yn), this.cc = !1)
    };
    c.prototype.aq = function() {
        this.G.bindTexture(this.G.TEXTURE_2D, this.Xc)
    };
    c.prototype.bq = function() {
        var a = this.G;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.Xc);
        a.activeTexture(a.TEXTURE0)
    };
    c.prototype.Yp = function() {
        var a = this.Wn,
            b = this.I;
        b.Km = a;
        b = b.gg;
        b.If &&
            this.G.uniform1f(b.If, a)
    };
    c.prototype.Vp = function() {
        this.G.drawElements(this.G.TRIANGLES, this.bd, this.G.UNSIGNED_SHORT, 2 * this.Jc)
    };
    c.prototype.Xp = function() {
        this.G.blendFunc(this.Jc, this.bd)
    };
    c.prototype.cq = function() {
        var a, b, f, c = this.I.Ya,
            d = this.I.Lm;
        a = 0;
        for (b = c.length; a < b; a++) f = c[a], a === d && f.Hf ? (this.G.uniformMatrix4fv(f.Hf, !1, this.oa), f.Ee = !0) : f.Ee = !1;
        Nb(this.oa, this.I.Yj)
    };
    c.prototype.Wp = function() {
        var a = this.G,
            b = this.I;
        this.Xc ? (b.Me === this.Xc && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D,
            null), b.Me = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.Gq), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.Xc, 0)) : (a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    c.prototype.Tp = function() {
        var a = this.G;
        0 === this.Jc ? (a.clearColor(this.oa[0], this.oa[1], this.oa[2], this.oa[3]), a.clear(a.COLOR_BUFFER_BIT)) : (a.enable(a.SCISSOR_TEST), a.scissor(this.oa[0], this.oa[1], this.oa[2], this.oa[3]),
            a.clearColor(0, 0, 0, 0), a.clear(this.G.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST))
    };
    c.prototype.Up = function() {
        var a = this.G,
            b = this.I,
            f = b.Ya[1];
        a.useProgram(f.oh);
        !f.Ee && f.Hf && (a.uniformMatrix4fv(f.Hf, !1, b.Yj), f.Ee = !0);
        a.enableVertexAttribArray(f.Fc);
        a.bindBuffer(a.ARRAY_BUFFER, b.kl);
        a.vertexAttribPointer(f.Fc, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.Jc / 4, this.bd);
        f = b.gg;
        a.useProgram(f.oh);
        0 <= f.Fc && (a.enableVertexAttribArray(f.Fc), a.bindBuffer(a.ARRAY_BUFFER, b.Bh[b.td]), a.vertexAttribPointer(f.Fc,
            2, a.FLOAT, !1, 0, 0));
        0 <= f.ie && (a.enableVertexAttribArray(f.ie), a.bindBuffer(a.ARRAY_BUFFER, b.uh[b.td]), a.vertexAttribPointer(f.ie, 2, a.FLOAT, !1, 0, 0))
    };
    c.prototype.Zp = function() {
        var a = this.G,
            b = this.I,
            f = b.Ya[this.Jc];
        b.Lm = this.Jc;
        b.gg = f;
        a.useProgram(f.oh);
        !f.Ee && f.Hf && (a.uniformMatrix4fv(f.Hf, !1, b.Yj), f.Ee = !0);
        f.If && a.uniform1f(f.If, b.Km);
        0 <= f.Fc && (a.enableVertexAttribArray(f.Fc), a.bindBuffer(a.ARRAY_BUFFER, b.Bh[b.td]), a.vertexAttribPointer(f.Fc, 2, a.FLOAT, !1, 0, 0));
        0 <= f.ie && (a.enableVertexAttribArray(f.ie),
            a.bindBuffer(a.ARRAY_BUFFER, b.uh[b.td]), a.vertexAttribPointer(f.ie, 2, a.FLOAT, !1, 0, 0))
    };
    c.prototype.$p = function() {
        var a, b, f = this.I.gg,
            c = this.G;
        a = this.oa;
        f.Sg && this.I.Me !== this.Xc && (c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, this.Xc), this.I.Me = this.Xc, c.activeTexture(c.TEXTURE0));
        f.Tk && c.uniform1f(f.Tk, a[0]);
        f.Sk && c.uniform1f(f.Sk, a[1]);
        f.Pe && c.uniform2f(f.Pe, a[2], a[3]);
        f.Oe && c.uniform2f(f.Oe, a[4], a[5]);
        f.Rg && c.uniform1f(f.Rg, a[6]);
        f.Qg && c.uniform1f(f.Qg, a[7]);
        f.Tg && c.uniform2f(f.Tg, a[8],
            a[9]);
        f.Uk && c.uniform1f(f.Uk, Ma() / 1E3);
        if (f.R.length)
            for (a = 0, b = f.R.length; a < b; a++) c.uniform1f(f.R[a][1], this.qo[a])
    };
    e.prototype.Uc = function() {
        this.qd === this.Wd.length && this.Wd.push(new c(0, this));
        return this.Wd[this.qd++]
    };
    e.prototype.$d = function() {
        if (0 !== this.qd && !this.G.isContextLost()) {
            var a = this.G;
            0 < this.ll && (a.bindBuffer(a.ARRAY_BUFFER, this.kl), a.bufferData(a.ARRAY_BUFFER, this.Ur.subarray(0, this.ll), a.STREAM_DRAW), b && 0 <= b.Fc && "<point>" === b.name && a.vertexAttribPointer(b.Fc, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.nd) {
                var b = this.gg;
                a.bindBuffer(a.ARRAY_BUFFER, this.Bh[this.td]);
                a.bufferData(a.ARRAY_BUFFER, this.Zl.subarray(0, this.nd), a.STREAM_DRAW);
                b && 0 <= b.Fc && "<point>" !== b.name && a.vertexAttribPointer(b.Fc, 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.uh[this.td]);
                a.bufferData(a.ARRAY_BUFFER, this.Nl.subarray(0, this.nd), a.STREAM_DRAW);
                b && 0 <= b.ie && "<point>" !== b.name && a.vertexAttribPointer(b.ie, 2, a.FLOAT, !1, 0, 0)
            }
            for (var f, a = 0, b = this.qd; a < b; a++) switch (f = this.Wd[a], f.type) {
                case 1:
                    f.Vp();
                    break;
                case 2:
                    f.aq();
                    break;
                case 3:
                    f.Yp();
                    break;
                case 4:
                    f.Xp();
                    break;
                case 5:
                    f.cq();
                    break;
                case 6:
                    f.Wp();
                    break;
                case 7:
                    f.Tp();
                    break;
                case 8:
                    f.Up();
                    break;
                case 9:
                    f.Zp();
                    break;
                case 10:
                    f.$p();
                    break;
                case 11:
                    f.bq()
            }
            this.ll = this.nd = this.qd = 0;
            this.cc = !1;
            this.td++;
            4 <= this.td && (this.td = 0)
        }
    };
    e.prototype.We = function(a) {
        if (a !== this.zn) {
            var b = this.Uc();
            b.type = 3;
            this.zn = b.Wn = a;
            this.cc = !1
        }
    };
    e.prototype.ic = function(a) {
        if (a !== this.ee) {
            var b = this.Uc();
            b.type = 2;
            this.ee = b.Xc = a;
            this.cc = !1
        }
    };
    e.prototype.oe = function(a, b) {
        if (a !== this.An || b !== this.xn) {
            var f =
                this.Uc();
            f.type = 4;
            f.Jc = a;
            f.bd = b;
            this.An = a;
            this.xn = b;
            this.cc = !1
        }
    };
    e.prototype.mo = function() {
        this.oe(this.G.ONE, this.G.ONE_MINUS_SRC_ALPHA)
    };
    e.prototype.Zi = function(a, b, f, c, d, e, m, k) {
        15992 <= this.nd && this.$d();
        var w = this.nd,
            p = this.Zl,
            n = this.Nl;
        if (this.cc) this.Wd[this.qd - 1].bd += 6;
        else {
            var g = this.Uc();
            g.type = 1;
            g.Jc = 3 * (w / 4);
            g.bd = 6;
            this.cc = !0
        }
        p[w] = a;
        n[w++] = 0;
        p[w] = b;
        n[w++] = 0;
        p[w] = f;
        n[w++] = 1;
        p[w] = c;
        n[w++] = 0;
        p[w] = d;
        n[w++] = 1;
        p[w] = e;
        n[w++] = 1;
        p[w] = m;
        n[w++] = 0;
        p[w] = k;
        n[w++] = 1;
        this.nd = w
    };
    e.prototype.ed = function(a,
        b, f, c, d, e, m, k, w) {
        15992 <= this.nd && this.$d();
        var p = this.nd,
            n = this.Zl,
            g = this.Nl;
        if (this.cc) this.Wd[this.qd - 1].bd += 6;
        else {
            var u = this.Uc();
            u.type = 1;
            u.Jc = 3 * (p / 4);
            u.bd = 6;
            this.cc = !0
        }
        var u = w.left,
            h = w.top,
            H = w.right;
        w = w.bottom;
        n[p] = a;
        g[p++] = u;
        n[p] = b;
        g[p++] = h;
        n[p] = f;
        g[p++] = H;
        n[p] = c;
        g[p++] = h;
        n[p] = d;
        g[p++] = H;
        n[p] = e;
        g[p++] = w;
        n[p] = m;
        g[p++] = u;
        n[p] = k;
        g[p++] = w;
        this.nd = p
    };
    e.prototype.kd = function(a) {
        if (this.Gg !== a) {
            if (!this.Ya[a]) {
                if (0 === this.Gg) return;
                a = 0
            }
            var b = this.Uc();
            b.type = 9;
            this.Gg = b.Jc = a;
            this.cc = !1
        }
    };
    e.prototype.hh =
        function(a) {
            a = this.Ya[a];
            return !(!a.Pe && !a.Oe)
        };
    e.prototype.ol = function(a) {
        a = this.Ya[a];
        return !!(a.Pe || a.Oe || a.Vj)
    };
    e.prototype.Yr = function(a) {
        a = this.Ya[a];
        return 0 !== a.bi || 0 !== a.ci
    };
    e.prototype.Tq = function(a) {
        return this.Ya[a].bi
    };
    e.prototype.Uq = function(a) {
        return this.Ya[a].ci
    };
    e.prototype.Vq = function(a, b) {
        return this.Ya[a].R[b][2]
    };
    e.prototype.Wi = function(a) {
        return this.Ya[a].Ij
    };
    e.prototype.Of = function(a, b, f, c, d, e, m, k, w, p, n, g) {
        var u = this.Ya[this.Gg],
            h, H;
        if (u.nr || g.length) {
            h = this.Uc();
            h.type = 10;
            h.oa ? Nb(this.Gc, h.oa) : h.oa = Mb();
            H = h.oa;
            H[0] = b;
            H[1] = f;
            H[2] = c;
            H[3] = d;
            H[4] = e;
            H[5] = m;
            H[6] = k;
            H[7] = w;
            H[8] = p;
            H[9] = n;
            h.Xc = u.Sg ? a : null;
            if (g.length)
                for (f = h.qo, f.length = g.length, a = 0, b = g.length; a < b; a++) f[a] = g[a];
            this.cc = !1
        }
    };
    e.prototype.clear = function(a, b, f, c) {
        var d = this.Uc();
        d.type = 7;
        d.Jc = 0;
        d.oa || (d.oa = Mb());
        d.oa[0] = a;
        d.oa[1] = b;
        d.oa[2] = f;
        d.oa[3] = c;
        this.cc = !1
    };
    e.prototype.clearRect = function(a, b, f, c) {
        if (!(0 > f || 0 > c)) {
            var d = this.Uc();
            d.type = 7;
            d.Jc = 1;
            d.oa || (d.oa = Mb());
            d.oa[0] = a;
            d.oa[1] = b;
            d.oa[2] = f;
            d.oa[3] = c;
            this.cc = !1
        }
    };
    e.prototype.Xr = function() {
        this.$d();
        this.G.flush()
    };
    var d = [],
        b = {};
    e.prototype.Ji = function(a, c, f, e) {
        c = !!c;
        f = !!f;
        var s = a.src + "," + c + "," + f + (c ? ",undefined" : ""),
            k = null;
        if ("undefined" !== typeof a.src && b.hasOwnProperty(s)) return k = b[s], k.Ph++, k;
        this.$d();
        var m = this.G,
            t = ha(a.width) && ha(a.height),
            k = m.createTexture();
        m.bindTexture(m.TEXTURE_2D, k);
        m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var w = m.RGBA,
            p = m.RGBA,
            n = m.UNSIGNED_BYTE;
        if (e && !this.vi) switch (e) {
            case 1:
                p = w = m.RGB;
                break;
            case 2:
                n = m.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                n = m.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                p = w = m.RGB, n = m.UNSIGNED_SHORT_5_6_5
        }
        if (!t && c) {
            e = document.createElement("canvas");
            e.width = ka(a.width);
            e.height = ka(a.height);
            var g = e.getContext("2d");
            g.webkitImageSmoothingEnabled = f;
            g.mozImageSmoothingEnabled = f;
            g.msImageSmoothingEnabled = f;
            g.imageSmoothingEnabled = f;
            g.drawImage(a, 0, 0, a.width, a.height, 0, 0, e.width, e.height);
            m.texImage2D(m.TEXTURE_2D, 0, w, p, n, e)
        } else m.texImage2D(m.TEXTURE_2D, 0, w, p, n, a);
        c ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.REPEAT),
            m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.REPEAT)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE));
        f ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.LINEAR), t ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.LINEAR_MIPMAP_LINEAR), m.generateMipmap(m.TEXTURE_2D)) : m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.LINEAR)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST), m.texParameteri(m.TEXTURE_2D,
            m.TEXTURE_MIN_FILTER, m.NEAREST));
        m.bindTexture(m.TEXTURE_2D, null);
        this.ee = null;
        k.cg = a.width;
        k.bg = a.height;
        k.Ph = 1;
        k.Cm = s;
        d.push(k);
        return b[s] = k
    };
    e.prototype.sd = function(a, b, f, c) {
        this.$d();
        var e = this.G;
        this.vi && (c = !1);
        var k = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, k);
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, a, b, 0, e.RGBA, c ? e.UNSIGNED_SHORT_4_4_4_4 : e.UNSIGNED_BYTE, null);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D,
            e.TEXTURE_MAG_FILTER, f ? e.LINEAR : e.NEAREST);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, f ? e.LINEAR : e.NEAREST);
        e.bindTexture(e.TEXTURE_2D, null);
        this.ee = null;
        k.cg = a;
        k.bg = b;
        d.push(k);
        return k
    };
    e.prototype.Ds = function(a, b, f) {
        this.$d();
        var c = this.G;
        this.vi && (f = !1);
        c.bindTexture(c.TEXTURE_2D, b);
        c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, f ? c.UNSIGNED_SHORT_4_4_4_4 : c.UNSIGNED_BYTE, a);
        c.bindTexture(c.TEXTURE_2D, null);
        this.ee = null
    };
    e.prototype.deleteTexture =
        function(a) {
            a && ("undefined" !== typeof a.Ph && 1 < a.Ph ? a.Ph-- : (this.$d(), a === this.ee && (this.G.bindTexture(this.G.TEXTURE_2D, null), this.ee = null), a === this.Me && (this.G.activeTexture(this.G.TEXTURE1), this.G.bindTexture(this.G.TEXTURE_2D, null), this.G.activeTexture(this.G.TEXTURE0), this.Me = null), ya(d, a), "undefined" !== typeof a.Cm && delete b[a.Cm], this.G.deleteTexture(a)))
        };
    e.prototype.jd = function(a) {
        if (a !== this.ko) {
            var b = this.Uc();
            b.type = 6;
            this.ko = b.Xc = a;
            this.cc = !1
        }
    };
    Va = e
})();
(function() {
    function e(n) {
        if (n && (n.getContext || n.dc) && !n.c2runtime) {
            n.c2runtime = this;
            var g = this;
            this.yk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk);
            this.Bf = !this.yk && "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap);
            this.Bd = !!n.dc;
            this.wg = "undefined" !== typeof window.AppMobi || this.Bd;
            this.Cc = !!window.c2cocoonjs;
            this.Cd = !!window.c2ejecta;
            this.Cc && (CocoonJS.App.onSuspended.addEventListener(function() {
                g.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                g.setSuspended(!1)
            }));
            this.Cd && (document.addEventListener("pagehide", function() {
                g.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                g.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                g.setSize(window.innerWidth, window.innerHeight)
            }));
            this.da = this.Bd || this.Cc || this.Cd;
            this.qn = /tizen/i.test(navigator.userAgent);
            this.on = /android/i.test(navigator.userAgent) &&
                !this.qn;
            this.vi = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
            this.Ai = /iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent);
            this.un = /ipad/i.test(navigator.userAgent);
            this.Gr = this.Ai || this.un || this.Cd;
            this.Hr = this.Ai && /os\s6/i.test(navigator.userAgent);
            this.ti = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent);
            this.tr = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Ar = /firefox/i.test(navigator.userAgent);
            this.Cr = !this.ti && /safari/i.test(navigator.userAgent);
            this.be = "undefined" !== typeof window.c2nodewebkit || /nodewebkit/i.test(navigator.userAgent);
            this.Er = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Fr = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Dk = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.sn = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.rn = this.Er || this.Fr || this.sn;
            this.xr = !("undefined" === typeof window.c2isBlackberry10 ||
                !window.c2isBlackberry10);
            this.ur = this.on && !this.ti && !this.Ar && !this.tr && !this.da;
            this.devicePixelRatio = 1;
            this.Dc = this.Bf || this.yk || this.wg || this.Cc || this.on || this.Gr || this.Dk || this.sn || this.xr || this.qn || this.Cd;
            this.Dc || (this.Dc = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            "undefined" === typeof cr_is_preview || this.be || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.be = !0);
            this.yr = "undefined" !==
                typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
            this.canvas = n;
            this.pf = document.getElementById("c2canvasdiv");
            this.ua = this.I = this.G = null;
            this.ik = "";
            this.ei = !1;
            this.Pn = this.Qn = 0;
            this.canvas.oncontextmenu = function(g) {
                g.preventDefault && g.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(g) {
                g.preventDefault && g.preventDefault();
                return !1
            };
            this.Bd && (window.c2runtime = this);
            this.be && (window.Zt = function(g) {
                    g.preventDefault();
                    return !1
                }, window.$t = function(g) {
                    g.preventDefault();
                    return !1
                },
                require("nw.gui").App.clearCache());
            this.width = n.width;
            this.height = n.height;
            this.X = this.width;
            this.W = this.height;
            this.Wh = this.width;
            this.Vh = this.height;
            this.Mg = window.innerWidth;
            this.Lg = window.innerHeight;
            this.qa = !0;
            this.yg = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.H = [];
            this.Na = [];
            this.Nk = {};
            this.Rc = [];
            this.fk = {};
            this.vd = [];
            this.Xf = [];
            this.uj = [];
            this.Bp = [];
            this.Cp = [];
            this.vn = this.uo = null;
            this.$c = new fa;
            this.zk = !1;
            this.Qc = 0;
            this.Bk = !1;
            this.Kb = [];
            this.Fd =
                this.Fb = this.Hi = this.Cl = "";
            this.sh = this.so = !1;
            this.Tj = this.Ug = this.Zd = this.rf = 0;
            this.$e = 1;
            this.Ed = new Na;
            this.Bi = 0;
            this.Hn = !0;
            this.Pi = this.ji = this.tf = this.Lc = this.Ng = this.hk = 0;
            this.dg = null;
            this.Zh = [];
            this.ek = [];
            this.ai = -1;
            this.Vk = [
                []
            ];
            this.Ul = this.Li = 0;
            this.Yi(null);
            this.jg = this.Nn = this.Zg = 0;
            this.mj = [];
            this.qj = this.$i = -1;
            this.Ag = !0;
            this.Ki = 0;
            this.xg = !1;
            this.os = 0;
            this.lr = !1;
            this.Hk = 0;
            this.za = this.yf = this.sl = !1;
            this.Yk = new fa;
            this.Zk = new fa;
            this.aj = [];
            this.Wc = new Pa([]);
            this.Ll = new Pa([]);
            this.nf = [];
            this.qi = {};
            this.qf = {};
            this.lf = {};
            this.Wf = {};
            this.Am = {};
            this.Dn = this.Gi = this.fc = this.tc = this.Cn = this.Fi = this.ea = null;
            this.Uf = this.Ek = !1;
            this.jk = [null, null];
            this.Ce = 0;
            this.je = {};
            this.kj = this.Gf = null;
            this.load();
            this.devicePixelRatio = (this.Je = (!this.da || this.Cd) && this.As && !this.ur) ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
            this.pb();
            var a, h = this.Fj && !(this.be || this.rn || this.Dk || this.yk);
            0 < this.Nb && this.setSize(window.innerWidth,
                window.innerHeight, !0);
            try {
                this.gq && (this.Cc || this.Cd || !this.da) && (a = {
                    alpha: h,
                    depth: !1,
                    antialias: !1,
                    failIfMajorPerformanceCaveat: !0
                }, this.G = n.getContext("webgl", a) || n.getContext("experimental-webgl", a))
            } catch (b) {}
            if (this.G) {
                this.da || (this.jb = document.createElement("canvas"), jQuery(this.jb).appendTo(this.canvas.parentNode), this.jb.oncontextmenu = x(!1), this.jb.onselectstart = x(!1), this.jb.width = this.Wh, this.jb.height = this.Vh, jQuery(this.jb).css({
                        width: this.Wh + "px",
                        height: this.Vh + "px"
                    }), this.ao(), this.jl =
                    this.jb.getContext("2d"));
                this.I = new Va(this.G, this.Dc);
                this.I.Pf(n.width, n.height);
                this.ua = null;
                this.canvas.addEventListener("webglcontextlost", function(n) {
                    n.preventDefault();
                    g.Or();
                    console.log("[Construct 2] WebGL context lost");
                    window.cr_setSuspended(!0)
                }, !1);
                this.canvas.addEventListener("webglcontextrestored", function() {
                    g.I.jn();
                    g.I.Pf(g.I.width, g.I.height, !0);
                    g.tc = null;
                    g.fc = null;
                    g.jk[0] = null;
                    g.jk[1] = null;
                    g.Pr();
                    g.qa = !0;
                    console.log("[Construct 2] WebGL context restored");
                    window.cr_setSuspended(!1)
                }, !1);
                var f, c, l, d, e, q;
                n = 0;
                for (a = this.H.length; n < a; n++)
                    for (c = this.H[n], h = 0, f = c.Q.length; h < f; h++) d = c.Q[h], d.lb = this.I.pk(d.id), this.Uf = this.Uf || this.I.hh(d.lb);
                n = 0;
                for (a = this.Rc.length; n < a; n++) {
                    e = this.Rc[n];
                    h = 0;
                    for (f = e.Q.length; h < f; h++) d = e.Q[h], d.lb = this.I.pk(d.id);
                    h = 0;
                    for (f = e.$.length; h < f; h++)
                        for (q = e.$[h], c = 0, l = q.Q.length; c < l; c++) d = q.Q[c], d.lb = this.I.pk(d.id), this.Uf = this.Uf || this.I.hh(d.lb)
                }
            } else {
                if (0 < this.Nb && this.Bd) {
                    this.canvas = null;
                    document.oncontextmenu = x(!1);
                    document.onselectstart = x(!1);
                    this.ua =
                        AppMobi.canvas.getContext("2d");
                    try {
                        this.ua.samplingMode = this.ka ? "smooth" : "sharp", this.ua.globalScale = 1, this.ua.HTML5CompatibilityMode = !0, this.ua.imageSmoothingEnabled = this.ka
                    } catch (m) {}
                    0 !== this.width && 0 !== this.height && (this.ua.width = this.width, this.ua.height = this.height)
                }
                this.ua || (a = this.Cc ? {
                        antialias: !!this.ka,
                        alpha: h
                    } : {
                        alpha: h
                    }, this.ua = n.getContext("2d", a), this.ua.webkitImageSmoothingEnabled = this.ka, this.ua.mozImageSmoothingEnabled = this.ka, this.ua.msImageSmoothingEnabled = this.ka, this.ua.imageSmoothingEnabled =
                    this.ka);
                this.jl = this.jb = null
            }
            this.pj = function() {
                g.zb(!1)
            };
            window == window.top || this.da || this.rn || this.Dk || (document.addEventListener("mousedown", function() {
                window.focus()
            }, !0), document.addEventListener("touchstart", function() {
                window.focus()
            }, !0));
            "undefined" !== typeof cr_is_preview && (this.Cc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (y("Reloading for continuous preview"), this.Hi = "__c2_continuouspreview", this.sh = !0), this.Tr &&
                !this.Dc && (jQuery(window).focus(function() {
                    g.setSuspended(!1)
                }), jQuery(window).blur(function() {
                    g.setSuspended(!0)
                })));
            0 === this.Nb && this.Je && 1 < this.devicePixelRatio && this.setSize(this.cb, this.bb, !0);
            this.Do();
            this.go();
            this.O = {}
        }
    }

    function k(n) {
        n.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function c(n, g, a, h) {
        var b = indexedDB.open("_C2SaveStates");
        b.onupgradeneeded = k;
        b.onerror = h;
        b.onsuccess = function(b) {
            b = b.target.result;
            b.onerror = h;
            b.transaction(["saves"], "readwrite").objectStore("saves").put({
                slot: n,
                data: g
            }).onsuccess = a
        }
    }

    function d(n, g, a) {
        var h = indexedDB.open("_C2SaveStates");
        h.onupgradeneeded = k;
        h.onerror = a;
        h.onsuccess = function(h) {
            h = h.target.result;
            h.onerror = a;
            var b = h.transaction(["saves"]).objectStore("saves").get(n);
            b.onsuccess = function() {
                b.result ? g(b.result.data) : g(null)
            }
        }
    }

    function b() {
        y("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location += "?continuous"
    }

    function a(n) {
        var g, a = {};
        for (g in n) !n.hasOwnProperty(g) || n[g] instanceof fa || n[g] && "undefined" !== typeof n[g].Pt || (a[g] = n[g]);
        return a
    }
    e.prototype.setSize = function(n, g, a) {
        var h = 0,
            b = 0,
            f = 0,
            c = 0,
            c = 0,
            l = this.Hr && this.Cr && !navigator.standalone && !this.da && !this.Bf;
        l && (g += 60);
        if (this.Mg !== n || this.Lg !== g || a) {
            this.Mg = n;
            this.Lg = g;
            var d = this.Nb,
                e = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.xg;
            if (e || 0 !== this.Nb || a) e && 0 < this.Ce && (d = this.Ce), 4 <= d ? (a = this.cb / this.bb, n / g >
                    a ? (f = g * a, 5 === d ? (c = f / this.cb, 1 < c ? c = Math.floor(c) : 1 > c && (c = 1 / Math.ceil(1 / c)), f = this.cb * c, c *= this.bb, h = (n - f) / 2, b = (g - c) / 2, n = f, g = c) : (h = (n - f) / 2, n = f)) : (c = n / a, 5 === d ? (c /= this.bb, 1 < c ? c = Math.floor(c) : 1 > c && (c = 1 / Math.ceil(1 / c)), f = this.cb * c, c *= this.bb, h = (n - f) / 2, b = (g - c) / 2, n = f) : b = (g - c) / 2, g = c), e && !this.be && (b = h = 0), h = Math.floor(h), b = Math.floor(b), n = Math.floor(n), g = Math.floor(g)) : this.be && this.xg && 0 === this.Um && (h = Math.floor((n - this.cb) / 2), b = Math.floor((g - this.bb) / 2), n = this.cb, g = this.bb), 2 > d && (this.ag = this.devicePixelRatio),
                this.Je && this.un && 1 < this.devicePixelRatio && (1024 <= n && (n = 1023), 1024 <= g && (g = 1023)), e = this.devicePixelRatio, this.Wh = n, this.Vh = g, this.width = Math.round(n * e), this.height = Math.round(g * e), this.qa = !0, this.Po ? (this.X = this.width, this.W = this.height, this.Ac = !0) : this.width < this.cb && this.height < this.bb || 1 === d ? (this.X = this.width, this.W = this.height, this.Ac = !0) : (this.X = this.cb, this.W = this.bb, this.Ac = !1, 2 === d ? (a = this.cb / this.bb, d = this.Mg / this.Lg, d < a ? this.X = this.W * d : d > a && (this.W = this.X / d)) : 3 === d && (a = this.cb / this.bb,
                    d = this.Mg / this.Lg, d > a ? this.X = this.W * d : d < a && (this.W = this.X / d))), this.pf && !this.da && (jQuery(this.pf).css({
                    width: n + "px",
                    height: g + "px",
                    "margin-left": h,
                    "margin-top": b
                }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                    width: n + "px",
                    height: g + "px"
                })), this.canvas && (this.canvas.width = Math.round(n * e), this.canvas.height = Math.round(g * e), this.Cd ? (this.canvas.style.left = h + "px", this.canvas.style.top = b + "px", this.canvas.style.width = n + "px", this.canvas.style.height = g + "px") : this.Je && !this.da && jQuery(this.canvas).css({
                    width: n +
                        "px",
                    height: g + "px"
                })), this.jb && (this.jb.width = n, this.jb.height = g, jQuery(this.jb).css({
                    width: n + "px",
                    height: g + "px"
                })), this.I && this.I.Pf(Math.round(n * e), Math.round(g * e)), this.Bd && this.ua && (this.ua.width = n, this.ua.height = g), this.ua && (this.ua.webkitImageSmoothingEnabled = this.ka, this.ua.mozImageSmoothingEnabled = this.ka, this.ua.msImageSmoothingEnabled = this.ka, this.ua.imageSmoothingEnabled = this.ka), this.Do(), this.da || !l && !this.Ai || window.setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 100)
        }
    };
    e.prototype.Do = function() {
        if (this.Dp &&
            0 !== this.il) {
            var a = "portrait";
            2 === this.il && (a = "landscape");
            screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
        }
    };
    e.prototype.Or = function() {
        this.Ek = !0;
        var a, g, b;
        a = 0;
        for (g = this.H.length; a < g; a++) b = this.H[a], b.Qi && b.Qi()
    };
    e.prototype.Pr = function() {
        this.Ek = !1;
        var a, g, b;
        a = 0;
        for (g = this.H.length; a < g; a++) b = this.H[a], b.fl && b.fl()
    };
    e.prototype.ao =
        function() {
            if (!this.da) {
                var a = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.xg ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
                a.position = "absolute";
                jQuery(this.jb).css(a)
            }
        };
    var l = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    e.prototype.setSuspended = function(a) {
        var g;
        if (a && !this.yg)
            for (y("[Construct 2] Suspending"),
                this.yg = !0, -1 !== this.$i && l && l(this.$i), -1 !== this.qj && clearTimeout(this.qj), a = 0, g = this.mj.length; a < g; a++) this.mj[a](!0);
        else if (!a && this.yg) {
            y("[Construct 2] Resuming");
            this.yg = !1;
            this.Bi = Ma();
            this.Ng = Ma();
            a = this.Ug = this.ji = 0;
            for (g = this.mj.length; a < g; a++) this.mj[a](!1);
            this.zb(!1)
        }
    };
    e.prototype.load = function() {
        var a = Rb();
        this.name = a[0];
        this.Tm = a[1];
        this.Nb = a[11];
        this.Um = a[11];
        this.cb = a[9];
        this.bb = a[10];
        this.Xn = this.cb / 2;
        this.Yn = this.bb / 2;
        this.da && !this.Cd && (4 <= a[11] || 0 === a[11]) && (y("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"),
            this.Um = this.Nb = 3);
        this.Xl = a[17];
        this.Pg = a[18];
        0 === this.Pg && (this.Gf = new Image, this.Gf.src = "loading-logo.png");
        this.Zg = a[20];
        this.ld = new P(this);
        var g, b, h, f, c, l, d, e, q;
        g = 0;
        for (b = a[2].length; g < b; g++) d = a[2][g], Wa(d), q = new d[0](this), q.jj = d[1], q.de = d[2], q.Ln = d[9], q.N && q.N(), this.plugins.push(q);
        a = Rb();
        g = 0;
        for (b = a[3].length; g < b; g++) {
            d = a[3][g];
            c = d[1];
            q = null;
            h = 0;
            for (f = this.plugins.length; h < f; h++)
                if (this.plugins[h] instanceof c) {
                    q = this.plugins[h];
                    break
                }
            var m = new q.ba(q);
            m.name = d[0];
            m.P = d[2];
            m.xk = d[3].slice(0);
            m.Cs = d[3].length;
            m.Ep = d[4];
            m.Iq = d[5];
            m.Y = d[11];
            m.P ? (m.Kf = [], m.wd = this.jg++, m.Da = null) : (m.Kf = null, m.wd = -1, m.Da = []);
            m.di = null;
            m.wf = null;
            m.Pm = null;
            m.rc = !1;
            m.Zb = null;
            d[6] ? (m.Ol = d[6][0], m.Pl = d[6][1], m.Ql = d[6][2]) : (m.Ol = null, m.Pl = 0, m.Ql = 0);
            m.Yb = d[7] ? d[7] : null;
            m.index = g;
            m.k = [];
            m.Yh = [];
            m.re = [new Xa(m)];
            m.ud = 0;
            m.yc = null;
            m.Rp = 0;
            m.Sf = !0;
            m.vj = Ya;
            m.Mq = Za;
            m.Sq = $a;
            m.ca = ab;
            m.jh = bb;
            m.Xi = cb;
            m.Se = db;
            m.ki = eb;
            m.lk = fb;
            m.ok = gb;
            m.vc = hb;
            m.Zm = ib;
            m.Uh = new Qa(this.cb, this.bb);
            m.Jh = !0;
            m.Kh = !1;
            m.O = {};
            m.toString = jb;
            m.Na = [];
            h = 0;
            for (f = d[8].length; h < f; h++) {
                e = d[8][h];
                var s = e[1],
                    k = null;
                c = 0;
                for (l = this.Na.length; c < l; c++)
                    if (this.Na[c] instanceof s) {
                        k = this.Na[c];
                        break
                    }
                k || (k = new s(this), k.Oi = [], k.Ni = new fa, k.N && k.N(), this.Na.push(k), Q && k instanceof Q && (this.uo = k), Jb.Jr && k instanceof Jb.Jr && (this.vn = k)); - 1 === k.Oi.indexOf(m) && k.Oi.push(m);
                c = new k.ba(k, m);
                c.name = e[0];
                c.Y = e[2];
                c.N();
                m.Na.push(c)
            }
            m.global = d[9];
            m.Ak = d[10];
            m.Q = [];
            h = 0;
            for (f = d[12].length; h < f; h++) m.Q.push({
                id: d[12][h][0],
                name: d[12][h][1],
                lb: -1,
                qb: !0,
                index: h
            });
            m.eu = d[13];
            this.Xl &&
                !m.P && !m.Ak && q.de || m.N();
            m.name && (this.types[m.name] = m);
            this.H.push(m);
            q.jj && (h = new q.U(m), h.uid = this.Zg++, h.fo = this.Nn++, h.Ge = 0, h.qg = kb, h.toString = lb, h.D = d[14], h.N(), m.k.push(h), this.je[h.uid.toString()] = h)
        }
        g = 0;
        for (b = a[4].length; g < b; g++)
            for (c = a[4][g], l = this.H[c[0]], h = 1, f = c.length; h < f; h++) d = this.H[c[h]], d.Da.push(l), l.Kf.push(d);
        g = 0;
        for (b = a[23].length; g < b; g++) {
            c = a[23][g];
            l = [];
            h = 0;
            for (f = c.length; h < f; h++) l.push(this.H[c[h]]);
            h = 0;
            for (f = l.length; h < f; h++) l[h].rc = !0, l[h].Zb = l
        }
        if (0 < this.jg)
            for (g = 0, b = this.H.length; g <
                b; g++)
                if (d = this.H[g], !d.P && d.Da.length) {
                    d.di = Array(this.jg);
                    d.wf = Array(this.jg);
                    d.Pm = Array(this.jg);
                    m = [];
                    h = k = s = e = 0;
                    for (f = d.Da.length; h < f; h++)
                        for (q = d.Da[h], d.di[q.wd] = e, e += q.Cs, d.wf[q.wd] = s, s += q.Ep, d.Pm[q.wd] = k, k += q.Iq, c = 0, l = q.Q.length; c < l; c++) m.push(ua({}, q.Q[c]));
                    d.Q = m.concat(d.Q);
                    h = 0;
                    for (f = d.Q.length; h < f; h++) d.Q[h].index = h
                }
        g = 0;
        for (b = a[5].length; g < b; g++) d = a[5][g], h = new mb(this, d), this.Nk[h.name] = h, this.Rc.push(h);
        g = 0;
        for (b = a[6].length; g < b; g++) d = a[6][g], h = new nb(this, d), this.fk[h.name] = h, this.vd.push(h);
        g = 0;
        for (b = this.vd.length; g < b; g++) this.vd[g].La();
        g = 0;
        for (b = this.vd.length; g < b; g++) this.vd[g].Jo();
        g = 0;
        for (b = this.uj.length; g < b; g++) this.uj[g].La();
        this.uj.length = 0;
        this.dd = a[8];
        this.ag = 1;
        this.gq = a[12];
        this.ka = a[13];
        this.Fj = a[14];
        this.As = a[16];
        this.il = a[19];
        this.Dp = 0 < this.il;
        this.Tr = a[21];
        this.Ac = this.Po = a[22];
        this.lj = Date.now()
    };
    var f = !1;
    e.prototype.Oo = function(a) {
        a.onerror = function(g) {
            f = a.Hp = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", g)
        };
        this.Xf.push(a)
    };
    e.prototype.Hq =
        function(a) {
            var g, b;
            g = 0;
            for (b = this.Xf.length; g < b; g++)
                if (this.Xf[g].Op === a) return this.Xf[g];
            return null
        };
    e.prototype.zm = function() {
        var a = 0,
            g = 0,
            b = !0,
            h, f, c;
        h = 0;
        for (f = this.Xf.length; h < f; h++) {
            c = this.Xf[h];
            var d = c.Im;
            if (!d || 0 >= d) d = 5E4;
            a += d;
            !c.complete && !c.loaded || c.Hp ? b = !1 : g += d
        }
        this.Te = 0 == a ? 0 : g / a;
        return b
    };
    e.prototype.go = function() {
        if (this.ua || this.I) {
            var a = this.ua || this.jl;
            this.jb && this.ao();
            this.Te = 0;
            this.Bn = -1;
            if (this.zm()) this.jr();
            else {
                var g = Date.now() - this.lj;
                if (a) {
                    var b = this.width,
                        h = this.height,
                        c = this.devicePixelRatio;
                    this.jb && (b = this.Wh, h = this.Vh, c = 1);
                    if (3 !== this.Pg && (this.Cc || 500 <= g && this.Bn != this.Te)) {
                        a.clearRect(0, 0, b, h);
                        var g = b / 2,
                            h = h / 2,
                            b = 0 === this.Pg && this.Gf.complete,
                            d = 40 * c,
                            l = 0,
                            e = 80 * c,
                            m;
                        b && (e = this.Gf.width * c, m = this.Gf.height * c, d = e / 2, l = m / 2, a.drawImage(this.Gf, D(g - d), D(h - l), e, m));
                        1 >= this.Pg ? (g = D(g - d) + 0.5, h = D(h + (l + (b ? 12 * c : 0))) + 0.5, a.fillStyle = f ? "red" : "DodgerBlue", a.fillRect(g, h, Math.floor(e * this.Te), 6 * c), a.strokeStyle = "black", a.strokeRect(g, h, e, 6 * c), a.strokeStyle = "white", a.strokeRect(g -
                            1 * c, h - 1 * c, e + 2 * c, 8 * c)) : 2 === this.Pg && (a.font = this.Cd ? "12pt ArialMT" : "12pt Arial", a.fillStyle = f ? "#f00" : "#999", a.du = "middle", c = Math.round(100 * this.Te) + "%", b = a.measureText ? a.measureText(c) : null, a.fillText(c, g - (b ? b.width : 0) / 2, h))
                    }
                    this.Bn = this.Te
                }
                setTimeout(function(g) {
                    return function() {
                        g.go()
                    }
                }(this), this.Cc ? 10 : 100)
            }
        }
    };
    e.prototype.jr = function() {
        this.jb && (this.canvas.parentNode.removeChild(this.jb), this.jb = this.jl = null);
        this.lj = Date.now();
        this.Ng = Ma();
        var a, g, b;
        if (this.Xl)
            for (a = 0, g = this.H.length; a < g; a++) b =
                this.H[a], b.P || b.Ak || !b.Aa.de || b.N();
        else this.Ag = !1;
        a = 0;
        for (g = this.Rc.length; a < g; a++) this.Rc[a].Pp();
        2 <= this.Nb && (a = this.cb / this.bb, g = this.width / this.height, this.ag = 2 !== this.Nb && g > a || 2 === this.Nb && g < a ? this.height / this.bb : this.width / this.cb);
        this.Tm ? this.Nk[this.Tm].Jl() : this.Rc[0].Jl();
        this.Xl || (this.Ki = 1, this.trigger(P.prototype.n.hm, null));
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (g = this.H.length; a < g; a++) b = this.H[a], b.Nr && b.Nr();
        this.zb(!1);
        this.Bd &&
            AppMobi.webview.execute("onGameReady();")
    };
    var q = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    e.prototype.zb = function(a) {
        if (this.ea) {
            var g = Ma();
            if (this.lr && this.sl && 29 > g - this.Hk) this.sl = !1, this.Hk = g, q ? this.$i = q(this.pj, this.canvas) : this.qj = setTimeout(this.pj, this.Dc ? 1 : 16);
            else {
                this.sl = !0;
                this.Hk = g;
                var b = this.Nb,
                    h = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen ||
                    !!document.msFullscreenElement;
                (h || this.xg) && 0 < this.Ce && (b = this.Ce);
                if (0 < b && (!this.Ai || window.self !== window.top)) {
                    var b = window.innerWidth,
                        f = window.innerHeight;
                    this.Mg === b && this.Lg === f || this.setSize(b, f)
                }
                this.da || (h ? (this.ei || (this.ik = jQuery(this.canvas).css("margin") || "0", this.ei = !0), this.ti || this.be || jQuery(this.canvas).css({
                        "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                        "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                    })) : this.ei ?
                    (this.ti || this.be || jQuery(this.canvas).css("margin", this.ik), this.ik = "", this.ei = !1, 0 === this.Nb && this.setSize(Math.round(this.Qn / this.devicePixelRatio), Math.round(this.Pn / this.devicePixelRatio), !0)) : (this.Qn = this.width, this.Pn = this.height));
                this.Ag && (h = this.zm(), this.Ki = this.Te, h && (this.Ag = !1, this.Te = 1, this.trigger(P.prototype.n.hm, null)));
                this.Lr();
                !this.qa && !this.Cc || this.Ek || this.sh || a || (this.qa = !1, this.I ? this.$b() : this.zc(), this.kj && (this.canvas && this.canvas.toDataURL && (this.canvas.toDataURL(this.kj[0],
                    this.kj[1]), this.trigger(P.prototype.n.bp, null)), this.kj = null));
                this.Xt || (this.Lc++, this.tf++, this.ji++);
                this.Ug += Ma() - g;
                this.yg || a || (q ? this.$i = q(this.pj, this.canvas) : this.qj = setTimeout(this.pj, this.Dc ? 1 : 16))
            }
        }
    };
    e.prototype.Lr = function() {
        var a, g, b, h, f, c, d, l, e;
        a = Ma();
        1E3 <= a - this.Ng && (this.Ng += 1E3, this.hk = this.ji, this.ji = 0, this.Tj = this.Ug, this.Ug = 0);
        this.Hn && (0 !== this.Bi && (g = a - this.Bi, 0 !== g || this.yr ? (this.Zd = g / 1E3, 0.5 < this.Zd ? this.Zd = 0 : 0.1 < this.Zd && (this.Zd = 0.1)) : (10 <= this.gu && (this.Hn = !1), this.Zd =
            1 / 60)), this.Bi = a);
        this.rf = this.Zd * this.$e;
        this.Ed.add(this.rf);
        a = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.xg;
        2 <= this.Nb || a && 0 < this.Ce ? (g = this.cb / this.bb, b = this.width / this.height, h = this.Nb, a && 0 < this.Ce && (h = this.Ce), this.ag = 2 !== h && b > g || 2 === h && b < g ? this.height / this.bb : this.width / this.cb, this.ea && (this.ea.Dl(this.ea.scrollX), this.ea.El(this.ea.scrollY))) : this.ag = this.Je ? this.devicePixelRatio : 1;
        this.pb();
        this.Qc++;
        this.ld.bs();
        this.Qc--;
        this.pb();
        this.Qc++;
        a = 0;
        for (g = this.H.length; a < g; a++)
            if (d = this.H[a], !d.P && (d.Na.length || d.Da.length))
                for (b = 0, h = d.k.length; b < h; b++)
                    for (l = d.k[b], f = 0, c = l.S.length; f < c; f++) l.S[f].zb();
        a = 0;
        for (g = this.H.length; a < g; a++)
            if (d = this.H[a], !d.P && (d.Na.length || d.Da.length))
                for (b = 0, h = d.k.length; b < h; b++)
                    for (l = d.k[b], f = 0, c = l.S.length; f < c; f++) e = l.S[f], e.bo && e.bo();
        b = this.Yk.cf();
        a = 0;
        for (g = b.length; a < g; a++) b[a].zb();
        this.Qc--;
        this.mr();
        for (a = 0; this.dg && 10 > a++;) this.Nm(this.dg);
        a = 0;
        for (g = this.vd.length; a < g; a++) this.vd[a].sk = !1;
        this.ea.hg && this.ea.hg.Pa();
        this.aj.length = 0;
        this.Qc++;
        a = 0;
        for (g = this.H.length; a < g; a++)
            if (d = this.H[a], !d.P && (d.Na.length || d.Da.length))
                for (b = 0, h = d.k.length; b < h; b++)
                    for (l = d.k[b], f = 0, c = l.S.length; f < c; f++) e = l.S[f], e.vh && e.vh();
        b = this.Zk.cf();
        a = 0;
        for (g = b.length; a < g; a++) b[a].vh();
        this.Qc--
    };
    e.prototype.Nm = function(a) {
        var g = this.ea;
        this.ea.qs();
        var b, h, f, c, d, l, e;
        if (this.I)
            for (b = 0, h = this.H.length; b < h; b++) d = this.H[b], d.P || !d.Wl || d.global && 0 !== d.k.length || -1 !== a.tg.indexOf(d) || d.Wl();
        g == a && (this.ld.Ub.length =
            0);
        a.Jl();
        b = 0;
        for (h = this.H.length; b < h; b++)
            if (d = this.H[b], d.global || d.Aa.jj)
                for (a = 0, g = d.k.length; a < g; a++)
                    if (l = d.k[a], l.bl && l.bl(), l.S)
                        for (f = 0, c = l.S.length; f < c; f++) e = l.S[f], e.bl && e.bl();
        this.qa = !0;
        this.pb()
    };
    e.prototype.wh = function(a) {
        this.Yk.add(a)
    };
    e.prototype.rs = function(a) {
        this.Zk.add(a)
    };
    e.prototype.De = function(a) {
        return a && -1 !== a.Yg ? this.Zd * a.Yg : this.rf
    };
    e.prototype.zc = function() {
        this.ea.zc(this.ua);
        this.Bd && this.ua.present()
    };
    e.prototype.$b = function() {
        this.ea.$b(this.I);
        this.I.Xr()
    };
    e.prototype.Ej =
        function(a) {
            a && this.Zh.push(a)
        };
    e.prototype.jo = function(a) {
        ya(this.Zh, a)
    };
    e.prototype.og = function(a) {
        a = a.toString();
        return this.je.hasOwnProperty(a) ? this.je[a] : null
    };
    e.prototype.ef = function(a) {
        var g, b;
        if (!this.$c.contains(a)) {
            this.$c.add(a);
            if (a.rc)
                for (g = 0, b = a.siblings.length; g < b; g++) this.ef(a.siblings[g]);
            this.zk && this.$c.Vf.push(a);
            this.Qc++;
            this.trigger(Object.getPrototypeOf(a.type.Aa).n.cp, a);
            this.Qc--
        }
    };
    e.prototype.pb = function() {
        var a, g, b, h, f, c, d, l, e, m;
        this.zk = !0;
        h = 0;
        for (c = this.Kb.length; h < c; h++)
            for (a =
                this.Kb[h], g = a.type, g.k.push(a), f = 0, d = g.Da.length; f < d; f++) g.Da[f].k.push(a), g.Da[f].Sf = !0;
        this.Kb.length = 0;
        c = this.$c.cf();
        for (h = 0; h < c.length; h++) {
            a = c[h];
            g = a.type;
            b = g.k;
            f = 0;
            for (d = this.Zh.length; f < d; f++) this.Zh[f](a);
            ya(b, a);
            0 === b.length && (g.Kh = !1);
            a.Th && g.Uh.update(a, a.Th, null);
            a.u && (va(a.u.k, a.qc()), a.u.mc = !0);
            f = 0;
            for (d = g.Da.length; f < d; f++) ya(g.Da[f].k, a), g.Da[f].Sf = !0;
            if (a.S)
                for (f = 0, d = a.S.length; f < d; f++) b = a.S[f], b.Jd && b.Jd(), b.J.Ni.remove(a);
            this.Yk.remove(a);
            this.Zk.remove(a);
            f = 0;
            for (d = this.ld.Ub.length; f <
                d; f++)
                if (e = this.ld.Ub[f], e.Gb.hasOwnProperty(g.index) && ya(e.Gb[g.index].Ad, a), !g.P)
                    for (b = 0, l = g.Da.length; b < l; b++) m = g.Da[b], e.Gb.hasOwnProperty(m.index) && ya(e.Gb[m.index].Ad, a);
            a.Jd && a.Jd();
            this.je.hasOwnProperty(a.uid.toString()) && delete this.je[a.uid.toString()];
            this.Pi--;
            64 > g.Yh.length && g.Yh.push(a);
            g.Sf = !0
        }
        this.$c.Pc() || (this.qa = !0);
        this.$c.clear();
        this.zk = !1
    };
    e.prototype.Jm = function(a, g, b, h) {
        if (a.P) {
            var f = D(Math.random() * a.Kf.length);
            return this.Jm(a.Kf[f], g, b, h)
        }
        return a.yc ? this.Yd(a.yc, g, !1,
            b, h, !1) : null
    };
    var s = [];
    e.prototype.Yd = function(a, g, b, h, f, c) {
        var d, l, e, m;
        if (!a) return null;
        var q = this.H[a[1]],
            k = q.Aa.de;
        if (this.Ag && k && !q.Ak || k && !this.I && 11 === a[0][11]) return null;
        var w = g;
        k || (g = null);
        var p;
        q.Yh.length ? (p = q.Yh.pop(), p.hc = !0, q.Aa.U.call(p, q)) : (p = new q.Aa.U(q), p.hc = !1);
        p.uid = b && !c ? a[2] : this.Zg++;
        this.je[p.uid.toString()] = p;
        p.fo = this.Nn++;
        p.Ge = q.k.length;
        d = 0;
        for (l = this.Kb.length; d < l; ++d) this.Kb[d].type === q && p.Ge++;
        p.qg = kb;
        e = a[3];
        if (p.hc) La(p.O);
        else {
            p.O = {};
            if ("undefined" !== typeof cr_is_preview)
                for (p.mn = [], p.mn.length = e.length, d = 0, l = e.length; d < l; d++) p.mn[d] = e[d][1];
            p.Va = [];
            p.Va.length = e.length
        }
        d = 0;
        for (l = e.length; d < l; d++) p.Va[d] = e[d][0];
        if (k) {
            var t = a[0];
            p.x = ga(h) ? t[0] : h;
            p.y = ga(f) ? t[1] : f;
            p.z = t[2];
            p.width = t[3];
            p.height = t[4];
            p.depth = t[5];
            p.q = t[6];
            p.opacity = t[7];
            p.Ob = t[8];
            p.Pb = t[9];
            p.Ib = t[10];
            d = t[11];
            !this.I && q.Q.length && (p.Ib = d);
            p.eg = Ra(p.Ib);
            this.G && Sa(p, p.Ib, this.G);
            if (p.hc) {
                d = 0;
                for (l = t[12].length; d < l; d++)
                    for (e = 0, m = t[12][d].length; e < m; e++) p.Ga[d][e] = t[12][d][e];
                p.Ka.set(0, 0, 0, 0);
                p.Th.set(0, 0, -1, -1);
                p.Db.mh(p.Ka);
                p.Mj.length = 0
            } else {
                p.Ga = t[12].slice(0);
                d = 0;
                for (l = p.Ga.length; d < l; d++) p.Ga[d] = t[12][d].slice(0);
                p.ia = [];
                p.Sd = [];
                p.Sd.length = q.Q.length;
                p.Ka = new sa(0, 0, 0, 0);
                p.Th = new sa(0, 0, -1, -1);
                p.Db = new ta;
                p.Mj = [];
                p.F = ob;
                p.Ot = pb;
                p.Jb = qb;
                p.Ea = rb;
                p.Lo = sb;
                p.qc = tb
            }
            p.xh = !1;
            p.vs = 0;
            p.us = 0;
            p.ts = null;
            14 === t.length && (p.xh = !0, p.vs = t[13][0], p.us = t[13][1], p.ts = t[13][2]);
            d = 0;
            for (l = q.Q.length; d < l; d++) p.Sd[d] = !0;
            p.Qd = ub;
            p.Qd();
            p.Mo = !!p.ia.length;
            p.Lj = !0;
            p.Pj = !0;
            q.Jh = !0;
            p.visible = !0;
            p.Yg = -1;
            p.u = g;
            p.df = g.k.length;
            "undefined" ===
            typeof p.la && (p.la = null);
            this.qa = p.rd = !0
        }
        p.toString = lb;
        var v;
        d = s.length = 0;
        for (l = q.Da.length; d < l; d++) s.push.apply(s, q.Da[d].Na);
        s.push.apply(s, q.Na);
        if (p.hc)
            for (d = 0, l = s.length; d < l; d++) {
                var C = s[d];
                v = p.S[d];
                v.hc = !0;
                C.J.U.call(v, C, p);
                t = a[4][d];
                e = 0;
                for (m = t.length; e < m; e++) v.D[e] = t[e];
                v.N();
                C.J.Ni.add(p)
            } else
                for (p.S = [], d = 0, l = s.length; d < l; d++) C = s[d], v = new C.J.U(C, p), v.hc = !1, v.D = a[4][d].slice(0), v.N(), p.S.push(v), C.J.Ni.add(p);
        t = a[5];
        if (p.hc)
            for (d = 0, l = t.length; d < l; d++) p.D[d] = t[d];
        else p.D = t.slice(0);
        this.Kb.push(p);
        g && (g.k.push(p), 1 !== g.Sb || 1 !== g.Tb) && (q.Kh = !0);
        this.Pi++;
        if (q.rc) {
            if (p.rc = !0, p.hc ? p.siblings.length = 0 : p.siblings = [], !b && !c) {
                d = 0;
                for (l = q.Zb.length; d < l; d++)
                    if (q.Zb[d] !== q) {
                        if (!q.Zb[d].yc) return null;
                        p.siblings.push(this.Yd(q.Zb[d].yc, w, !1, k ? p.x : h, k ? p.y : f, !0))
                    }
                d = 0;
                for (l = p.siblings.length; d < l; d++)
                    for (p.siblings[d].siblings.push(p), e = 0; e < l; e++) d !== e && p.siblings[d].siblings.push(p.siblings[e])
            }
        } else p.rc = !1, p.siblings = null;
        p.N();
        d = 0;
        for (l = p.S.length; d < l; d++) p.S[d].Wr && p.S[d].Wr();
        return p
    };
    e.prototype.ng =
        function(a) {
            var g, b;
            g = 0;
            for (b = this.ea.$.length; g < b; g++) {
                var h = this.ea.$[g];
                if (Ua(h.name, a)) return h
            }
            return null
        };
    e.prototype.yd = function(a) {
        a = D(a);
        0 > a && (a = 0);
        a >= this.ea.$.length && (a = this.ea.$.length - 1);
        return this.ea.$[a]
    };
    e.prototype.Rj = function(a) {
        var g, b;
        g = 0;
        for (b = a.length; g < b; g++) a[g].ca().na = !0
    };
    e.prototype.jh = function(a) {
        var g, b;
        g = 0;
        for (b = a.length; g < b; g++) a[g].jh()
    };
    e.prototype.Xi = function(a) {
        var g, b;
        g = 0;
        for (b = a.length; g < b; g++) a[g].Xi()
    };
    e.prototype.Se = function(a) {
        var g, b;
        g = 0;
        for (b = a.length; g <
            b; g++) a[g].Se()
    };
    e.prototype.Io = function(a) {
        if (a.Jh) {
            var g, b, h = a.k;
            g = 0;
            for (b = h.length; g < b; ++g) h[g].Lo();
            h = this.Kb;
            g = 0;
            for (b = h.length; g < b; ++g) h[g].type === a && h[g].Lo();
            a.Jh = !1
        }
    };
    e.prototype.Wm = function(a, g, b, h) {
        var f, c, d = a ? 1 !== a.Sb || 1 !== a.Tb : !1;
        if (g.P)
            for (a = 0, f = g.Kf.length; a < f; ++a) c = g.Kf[a], d || c.Kh ? xa(h, c.k) : (this.Io(c), c.Uh.ho(b, h));
        else d || g.Kh ? xa(h, g.k) : (this.Io(g), g.Uh.ho(b, h))
    };
    e.prototype.bn = function(a, g, b, h) {
        var f, c;
        f = 0;
        for (c = g.length; f < c; ++f) this.Wm(a, g[f], b, h)
    };
    e.prototype.Wq = function(a, g,
        b) {
        var h = this.uo;
        h && this.bn(a, h.Oi, g, b)
    };
    e.prototype.Qq = function(a, g, b) {
        var h = this.vn;
        h && this.bn(a, h.Oi, g, b)
    };
    e.prototype.Ml = function(a, g, b, h) {
        var f = a.ca(),
            c, d, l, e, m, q;
        if (f.na)
            for (h || (f.na = !1, f.k.length = 0), c = 0, e = a.k.length; c < e; c++) {
                if (l = a.k[c], l.Ea(), m = l.u.Ra(g, b, !0), q = l.u.Ra(g, b, !1), l.Jb(m, q)) {
                    if (h) return !1;
                    f.k.push(l)
                }
            } else {
                c = d = 0;
                for (e = f.k.length; c < e; c++)
                    if (l = f.k[c], l.Ea(), m = l.u.Ra(g, b, !0), q = l.u.Ra(g, b, !1), l.Jb(m, q)) {
                        if (h) return !1;
                        f.k[d] = f.k[c];
                        d++
                    }
                h || (f.k.length = d)
            }
        a.vc();
        return h ? !0 : f.rk()
    };
    e.prototype.jc =
        function(a, g) {
            if (!(a && g && a !== g && a.rd && g.rd)) return !1;
            a.Ea();
            g.Ea();
            var b = a.u,
                h = g.u,
                f, c, d, l, e, m, q, k;
            if (b === h || b.Sb === h.Sb && h.Tb === h.Tb && b.scale === h.scale && b.q === h.q && b.Cb === h.Cb) {
                if (!a.Ka.rr(g.Ka) || !a.Db.nn(g.Db) || a.xh && g.xh) return !1;
                if (a.xh) return this.wo(a, g);
                if (g.xh) return this.wo(g, a);
                q = a.la && !a.la.Cf();
                f = g.la && !g.la.Cf();
                if (!q && !f) return !0;
                q ? (a.la.of(a.width, a.height, a.q), q = a.la) : (this.Wc.Qf(a.Db, a.x, a.y, a.width, a.height), q = this.Wc);
                f ? (g.la.of(g.width, g.height, g.q), k = g.la) : (this.Wc.Qf(g.Db, g.x,
                    g.y, g.width, g.height), k = this.Wc);
                return q.ug(k, g.x - a.x, g.y - a.y)
            }
            q = a.la && !a.la.Cf();
            f = g.la && !g.la.Cf();
            q ? (a.la.of(a.width, a.height, a.q), this.Wc.oo(a.la)) : this.Wc.Qf(a.Db, a.x, a.y, a.width, a.height);
            q = this.Wc;
            f ? (g.la.of(g.width, g.height, g.q), this.Ll.oo(g.la)) : this.Ll.Qf(g.Db, g.x, g.y, g.width, g.height);
            k = this.Ll;
            f = 0;
            for (c = q.Tc; f < c; f++) d = 2 * f, l = d + 1, e = q.Wa[d], m = q.Wa[l], q.Wa[d] = b.ja(e + a.x, m + a.y, !0), q.Wa[l] = b.ja(e + a.x, m + a.y, !1);
            q.Ea();
            f = 0;
            for (c = k.Tc; f < c; f++) d = 2 * f, l = d + 1, e = k.Wa[d], m = k.Wa[l], k.Wa[d] = h.ja(e + g.x,
                m + g.y, !0), k.Wa[l] = h.ja(e + g.x, m + g.y, !1);
            k.Ea();
            return q.ug(k, 0, 0)
        };
    var v = new ta;
    new sa(0, 0, 0, 0);
    var m = [];
    e.prototype.wo = function(a, g) {
        var b, h, f, c, d = g.Ka,
            l = a.x,
            e = a.y;
        a.St(d, m);
        var q = g.la && !g.la.Cf();
        b = 0;
        for (h = m.length; b < h; ++b)
            if (f = m[b], c = f.au, d.sr(c, l, e) && (v.mh(c), v.offset(l, e), v.nn(g.Db)))
                if (q)
                    if (g.la.of(g.width, g.height, g.q), f.ml) {
                        if (f.ml.ug(g.la, g.x - (l + c.left), g.y - (e + c.top))) return m.length = 0, !0
                    } else {
                        if (this.Wc.Qf(v, 0, 0, c.right - c.left, c.bottom - c.top), this.Wc.ug(g.la, g.x, g.y)) return m.length = 0, !0
                    } else if (f.ml) {
            if (this.Wc.Qf(g.Db,
                    0, 0, g.width, g.height), f.ml.ug(this.Wc, -(l + c.left), -(e + c.top))) return m.length = 0, !0
        } else return m.length = 0, !0;
        m.length = 0;
        return !1
    };
    e.prototype.Eo = function(a, g) {
        if (!g) return !1;
        var b, h, f, c, d;
        b = 0;
        for (h = a.Na.length; b < h; b++)
            if (a.Na[b].J instanceof g) return !0;
        if (!a.P)
            for (b = 0, h = a.Da.length; b < h; b++)
                for (d = a.Da[b], f = 0, c = d.Na.length; f < c; f++)
                    if (d.Na[f].J instanceof g) return !0;
        return !1
    };
    e.prototype.Fo = function(a) {
        return this.Eo(a, Jb.jt)
    };
    e.prototype.Vl = function(a) {
        return this.Eo(a, Jb.kt)
    };
    var t = [];
    e.prototype.Ma =
        function(a) {
            var g, b, h;
            a.Ea();
            this.Wq(a.u, a.Ka, t);
            g = 0;
            for (b = t.length; g < b; ++g)
                if (h = t[g], h.O.ns && this.jc(a, h)) return t.length = 0, h;
            t.length = 0;
            return null
        };
    var w = [];
    e.prototype.te = function(a, g) {
        var b = null;
        g && (b = w, b.length = 0);
        a.Ea();
        this.Qq(a.u, a.Ka, t);
        var h, f, c;
        h = 0;
        for (f = t.length; h < f; ++h)
            if (c = t[h], c.O.Yt && this.jc(a, c))
                if (g) b.push(c);
                else return t.length = 0, c;
        t.length = 0;
        return b
    };
    e.prototype.Vc = function(a, g, b, h, f, c) {
        h = h || 50;
        var d = a.x,
            l = a.y,
            e, m = null,
            q = null;
        for (e = 0; e < h; e++)
            if (a.x = d + g * e, a.y = l + b * e, a.F(), !this.jc(a,
                    m) && ((m = this.Ma(a)) && (q = m), !m && (f && (m = c ? this.jc(a, c) ? c : null : this.te(a)) && (q = m), !m))) return q && this.pl(a, g, b, q), !0;
        a.x = d;
        a.y = l;
        a.F();
        return !1
    };
    e.prototype.pl = function(a, g, b, h) {
        var f = 2,
            c, d = !1;
        c = !1;
        for (var l = a.x, e = a.y; 16 >= f;) c = 1 / f, f *= 2, a.x += g * c * (d ? 1 : -1), a.y += b * c * (d ? 1 : -1), a.F(), this.jc(a, h) ? c = d = !0 : (c = d = !1, l = a.x, e = a.y);
        c && (a.x = l, a.y = e, a.F())
    };
    e.prototype.ql = function(a, g) {
        var b = ga(g) ? 100 : g,
            h = 0,
            f = a.x,
            c = a.y,
            d = 0,
            l = 0,
            e = 0,
            m = this.Ma(a);
        if (!m) return !0;
        for (; h <= b;) {
            switch (d) {
                case 0:
                    l = 0;
                    e = -1;
                    h++;
                    break;
                case 1:
                    l = 1;
                    e = -1;
                    break;
                case 2:
                    l = 1;
                    e = 0;
                    break;
                case 3:
                    e = l = 1;
                    break;
                case 4:
                    l = 0;
                    e = 1;
                    break;
                case 5:
                    l = -1;
                    e = 1;
                    break;
                case 6:
                    l = -1;
                    e = 0;
                    break;
                case 7:
                    e = l = -1
            }
            d = (d + 1) % 8;
            a.x = D(f + l * h);
            a.y = D(c + e * h);
            a.F();
            if (!this.jc(a, m) && (m = this.Ma(a), !m)) return !0
        }
        a.x = f;
        a.y = c;
        a.F();
        return !1
    };
    e.prototype.fd = function(a, g) {
        a.rd && g.rd && this.aj.push([a, g])
    };
    e.prototype.Mp = function(a, g) {
        var b, h, f;
        b = 0;
        for (h = this.aj.length; b < h; b++)
            if (f = this.aj[b], f[0] == a && f[1] == g || f[0] == g && f[1] == a) return !0;
        return !1
    };
    e.prototype.Jp = function(a, g, b) {
        var h = a.x,
            f = a.y,
            c = ma(10,
                Ha(g, b, h, f)),
            d = Da(g, b, h, f),
            l = this.Ma(a);
        if (!l) return L(d + oa);
        var e = l,
            m, q, k, s, p = E(5);
        for (m = 1; 36 > m; m++)
            if (q = d - m * p, a.x = g + Math.cos(q) * c, a.y = b + Math.sin(q) * c, a.F(), !this.jc(a, e) && (e = this.Ma(a), !e)) {
                k = q;
                break
            }
        36 === m && (k = L(d + oa));
        e = l;
        for (m = 1; 36 > m; m++)
            if (q = d + m * p, a.x = g + Math.cos(q) * c, a.y = b + Math.sin(q) * c, a.F(), !this.jc(a, e) && (e = this.Ma(a), !e)) {
                s = q;
                break
            }
        36 === m && (s = L(d + oa));
        a.x = h;
        a.y = f;
        a.F();
        if (s === k) return s;
        a = Ea(s, k) / 2;
        a = Ga(s, k) ? L(k + a + oa) : L(s + a);
        k = Math.cos(d);
        d = Math.sin(d);
        s = Math.cos(a);
        a = Math.sin(a);
        g = k * s +
            d * a;
        return Da(0, 0, k - 2 * g * s, d - 2 * g * a)
    };
    var p = -1;
    e.prototype.trigger = function(a, g, b) {
        if (!this.ea) return !1;
        var h = this.ea.hg;
        if (!h) return !1;
        var f = !1,
            c, d, l;
        p++;
        var e = h.$j;
        d = 0;
        for (l = e.length; d < l; ++d) c = this.Bo(a, g, e[d], b), f = f || c;
        c = this.Bo(a, g, h, b);
        p--;
        return f || c
    };
    e.prototype.Bo = function(a, g, b, h) {
        var f = !1,
            c, d, l, e;
        if (g)
            for (l = this.Tl(a, g, g.type.name, b, h), f = f || l, e = g.type.Da, c = 0, d = e.length; c < d; ++c) l = this.Tl(a, g, e[c].name, b, h), f = f || l;
        else l = this.Tl(a, g, "system", b, h), f = f || l;
        return f
    };
    e.prototype.Tl = function(a, g,
        b, h, f) {
        var c, d = !1,
            l = !1,
            l = "undefined" !== typeof f,
            e = (l ? h.Rm : h.Co)[b];
        if (!e) return d;
        var m = null;
        h = 0;
        for (c = e.length; h < c; ++h)
            if (e[h].method == a) {
                m = e[h].ig;
                break
            }
        if (!m) return d;
        a = l ? m[f] : m;
        if (!a) return null;
        h = 0;
        for (c = a.length; h < c; h++) f = a[h][0], l = a[h][1], l = this.Fq(g, b, f, l), d = d || l;
        return d
    };
    e.prototype.Fq = function(a, g, b, f) {
        var c, d, l = !1;
        this.Ul++;
        var e = this.ib().Lb;
        e && this.jh(e.pe);
        var m = 1 < this.Ul;
        this.jh(b.pe);
        m && this.Zr();
        var q = this.Yi(b);
        q.Lb = b;
        a && (c = this.types[g].ca(), c.na = !1, c.k.length = 1, c.k[0] = a, this.types[g].vc());
        a = !0;
        if (b.parent) {
            g = q.vo;
            for (c = b.parent; c;) g.push(c), c = c.parent;
            g.reverse();
            c = 0;
            for (d = g.length; c < d; c++)
                if (!g[c].ds()) {
                    a = !1;
                    break
                }
        }
        a && (this.tf++, b.Sc ? b.cs(f) : b.Pa(), l = l || q.Ne);
        this.Vi();
        m && this.Vr();
        this.Se(b.pe);
        e && this.Se(e.pe);
        0 !== this.Qc || 0 !== p || this.Bk || this.$c.Pc() && !this.Kb.length || this.pb();
        this.Ul--;
        return l
    };
    e.prototype.li = function() {
        var a = this.ib();
        return a.Lb.Za[a.Sa]
    };
    e.prototype.Lq = function() {
        var a = this.ib();
        return a.Lb.uc[a.Hb]
    };
    e.prototype.Zr = function() {
        this.Li++;
        this.Li >= this.Vk.length &&
            this.Vk.push([])
    };
    e.prototype.Vr = function() {
        this.Li--
    };
    e.prototype.Xm = function() {
        return this.Vk[this.Li]
    };
    e.prototype.Yi = function(a) {
        this.ai++;
        this.ai >= this.ek.length && this.ek.push(new vb);
        var g = this.ib();
        g.reset(a);
        return g
    };
    e.prototype.Vi = function() {
        this.ai--
    };
    e.prototype.ib = function() {
        return this.ek[this.ai]
    };
    e.prototype.Ym = function(a, g) {
        for (var b, f, c, d, l, e; g;) {
            b = 0;
            for (f = g.Kc.length; b < f; b++)
                if (e = g.Kc[b], e instanceof wb && Ua(a, e.name)) return e;
            g = g.parent
        }
        b = 0;
        for (f = this.vd.length; b < f; b++)
            for (l = this.vd[b],
                c = 0, d = l.ae.length; c < d; c++)
                if (e = l.ae[c], e instanceof wb && Ua(a, e.name)) return e;
        return null
    };
    e.prototype.$m = function(a) {
        var g, b;
        g = 0;
        for (b = this.Rc.length; g < b; g++)
            if (this.Rc[g].Y === a) return this.Rc[g];
        return null
    };
    e.prototype.ni = function(a) {
        var b, f;
        b = 0;
        for (f = this.H.length; b < f; b++)
            if (this.H[b].Y === a) return this.H[b];
        return null
    };
    e.prototype.Nq = function(a) {
        var b, f;
        b = 0;
        for (f = this.nf.length; b < f; b++)
            if (this.nf[b].Y === a) return this.nf[b];
        return null
    };
    e.prototype.mr = function() {
        var a = this,
            g = this.Cl,
            f = this.Fd,
            h = this.Hi,
            l = !1;
        this.so && (l = !0, g = "__c2_continuouspreview", this.so = !1);
        if (g.length) {
            this.pb();
            f = this.ks();
            if (window.indexedDB && !this.Cc) c(g, f, function() {
                y("Saved state to IndexedDB storage (" + f.length + " bytes)");
                a.Fd = f;
                a.trigger(P.prototype.n.Dj, null);
                a.Fd = "";
                l && b()
            }, function(h) {
                try {
                    localStorage.setItem("__c2save_" + g, f), y("Saved state to WebStorage (" + f.length + " bytes)"), a.Fd = f, a.trigger(P.prototype.n.Dj, null), a.Fd = "", l && b()
                } catch (c) {
                    y("Failed to save game state: " + h + "; " + c)
                }
            });
            else try {
                localStorage.setItem("__c2save_" +
                    g, f), y("Saved state to WebStorage (" + f.length + " bytes)"), a.Fd = f, this.trigger(P.prototype.n.Dj, null), a.Fd = "", l && b()
            } catch (e) {
                y("Error saving to WebStorage: " + e)
            }
            this.Fb = this.Hi = this.Cl = ""
        }
        h.length && (window.indexedDB && !this.Cc ? d(h, function(b) {
            b ? (a.Fb = b, y("Loaded state from IndexedDB storage (" + a.Fb.length + " bytes)")) : (a.Fb = localStorage.getItem("__c2save_" + h) || "", y("Loaded state from WebStorage (" + a.Fb.length + " bytes)"));
            a.sh = !1;
            a.Fb.length || a.trigger(P.prototype.n.Cj, null)
        }, function() {
            a.Fb = localStorage.getItem("__c2save_" +
                h) || "";
            y("Loaded state from WebStorage (" + a.Fb.length + " bytes)");
            a.sh = !1;
            a.Fb.length || a.trigger(P.prototype.n.Cj, null)
        }) : (this.Fb = localStorage.getItem("__c2save_" + h) || "", y("Loaded state from WebStorage (" + this.Fb.length + " bytes)"), this.sh = !1, a.Fb.length || a.trigger(P.prototype.n.Cj, null)), this.Cl = this.Hi = "");
        this.Fb.length && (this.pb(), this.Kr(this.Fb), this.Fd = this.Fb, this.trigger(P.prototype.n.lp, null), this.Fb = this.Fd = "")
    };
    e.prototype.ks = function() {
        var b, g, f, h, c, d, l, e = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.Ed.mb,
                timescale: this.$e,
                tickcount: this.Lc,
                execcount: this.tf,
                next_uid: this.Zg,
                running_layout: this.ea.Y,
                start_time_offset: Date.now() - this.lj
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        b = 0;
        for (g = this.H.length; b < g; b++)
            if (c = this.H[b], !c.P && !this.Fo(c)) {
                d = {
                    instances: []
                };
                Ja(c.O) && (d.ex = a(c.O));
                f = 0;
                for (h = c.k.length; f < h; f++) d.instances.push(this.Bl(c.k[f]));
                e.types[c.Y.toString()] = d
            }
        b = 0;
        for (g = this.Rc.length; b < g; b++) f = this.Rc[b], e.layouts[f.Y.toString()] = f.Qa();
        h = e.events.groups;
        b = 0;
        for (g = this.nf.length; b <
            g; b++) f = this.nf[b], h[f.Y.toString()] = this.qi[f.rg].pi;
        g = e.events.cnds;
        for (l in this.qf) this.qf.hasOwnProperty(l) && (b = this.qf[l], Ja(b.O) && (g[l] = {
            ex: a(b.O)
        }));
        g = e.events.acts;
        for (l in this.lf) this.lf.hasOwnProperty(l) && (b = this.lf[l], Ja(b.O) && (g[l] = {
            ex: b.O
        }));
        g = e.events.vars;
        for (l in this.Wf) this.Wf.hasOwnProperty(l) && (b = this.Wf[l], b.wi || b.parent && !b.zg || (g[l] = b.data));
        e.system = this.ld.Qa();
        return JSON.stringify(e)
    };
    e.prototype.io = function() {
        var a, b, f, h, c, d;
        this.je = {};
        a = 0;
        for (b = this.H.length; a < b; a++)
            if (f =
                this.H[a], !f.P)
                for (h = 0, c = f.k.length; h < c; h++) d = f.k[h], this.je[d.uid.toString()] = d
    };
    e.prototype.Kr = function(a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            var b = a.rt;
            this.Ed.reset();
            this.Ed.mb = b.time;
            this.$e = b.timescale;
            this.Lc = b.tickcount;
            this.lj = Date.now() - b.start_time_offset;
            var f = b.running_layout;
            if (f !== this.ea.Y)
                if (f = this.$m(f)) this.Nm(f);
                else return;
            var h, c, d, l, e, m, q;
            m = a.types;
            for (c in m)
                if (m.hasOwnProperty(c) && (l = this.ni(parseInt(c, 10))) && !l.P && !this.Fo(l)) {
                    m[c].ex ? l.O = m[c].ex : La(l.O);
                    e = l.k;
                    d = m[c].instances;
                    f = 0;
                    for (h = na(e.length, d.length); f < h; f++) this.Ii(e[f], d[f]);
                    f = d.length;
                    for (h = e.length; f < h; f++) this.ef(e[f]);
                    f = e.length;
                    for (h = d.length; f < h; f++) {
                        e = null;
                        if (l.Aa.de && (e = this.ea.mi(d[f].w.l), !e)) continue;
                        e = this.Yd(l.yc, e, !1, 0, 0, !0);
                        this.Ii(e, d[f])
                    }
                    l.Sf = !0
                }
            this.pb();
            this.io();
            h = a.layouts;
            for (c in h) h.hasOwnProperty(c) && (f = this.$m(parseInt(c, 10))) && f.ab(h[c]);
            h = a.events.groups;
            for (c in h) h.hasOwnProperty(c) && (f = this.Nq(parseInt(c, 10))) && this.qi[f.rg] && (this.qi[f.rg].pi = h[c]);
            f = a.events.cnds;
            for (c in f) f.hasOwnProperty(c) && this.qf.hasOwnProperty(c) && (this.qf[c].O = f[c].ex);
            f = a.events.acts;
            for (c in f) f.hasOwnProperty(c) && this.lf.hasOwnProperty(c) && (this.lf[c].O = f[c].ex);
            f = a.events.vars;
            for (c in f) f.hasOwnProperty(c) && this.Wf.hasOwnProperty(c) && (this.Wf[c].data = f[c]);
            this.Zg = b.next_uid;
            this.ld.ab(a.system);
            f = 0;
            for (h = this.H.length; f < h; f++)
                if (l = this.H[f], !l.P)
                    for (c = 0, a = l.k.length; c < a; c++) {
                        e = l.k[c];
                        if (l.rc)
                            for (m = e.qg(), b = e.siblings.length = 0, d = l.Zb.length; b < d; b++) q = l.Zb[b], l !== q && e.siblings.push(q.k[m]);
                        e.Yc && e.Yc();
                        if (e.S)
                            for (b = 0, d = e.S.length; b < d; b++) m = e.S[b], m.Yc && m.Yc()
                    }
                this.qa = !0
        }
    };
    e.prototype.Bl = function(b, g) {
        var f, h, c, d, l;
        d = b.type;
        c = d.Aa;
        var e = {};
        g ? e.c2 = !0 : e.uid = b.uid;
        Ja(b.O) && (e.ex = a(b.O));
        if (b.Va && b.Va.length)
            for (e.ivs = {}, f = 0, h = b.Va.length; f < h; f++) e.ivs[b.type.xk[f].toString()] = b.Va[f];
        if (c.de) {
            c = {
                x: b.x,
                y: b.y,
                w: b.width,
                h: b.height,
                l: b.u.Y,
                zi: b.qc()
            };
            0 !== b.q && (c.a = b.q);
            1 !== b.opacity && (c.o = b.opacity);
            0.5 !== b.Ob && (c.hX = b.Ob);
            0.5 !== b.Pb && (c.hY = b.Pb);
            0 !== b.Ib && (c.bm = b.Ib);
            b.visible || (c.v = b.visible);
            b.rd || (c.ce = b.rd); - 1 !== b.Yg && (c.mts = b.Yg);
            if (d.Q.length)
                for (c.fx = [], f = 0, h = d.Q.length; f < h; f++) l = d.Q[f], c.fx.push({
                    name: l.name,
                    active: b.Sd[l.index],
                    params: b.Ga[l.index]
                });
            e.w = c
        }
        if (b.S && b.S.length)
            for (e.behs = {}, f = 0, h = b.S.length; f < h; f++) d = b.S[f], d.Qa && (e.behs[d.type.Y.toString()] = d.Qa());
        b.Qa && (e.data = b.Qa());
        return e
    };
    e.prototype.Pq = function(a, b) {
        var f, c;
        f = 0;
        for (c = a.xk.length; f < c; f++)
            if (a.xk[f] === b) return f;
        return -1
    };
    e.prototype.Kq = function(a, b) {
        var f, c;
        f = 0;
        for (c = a.S.length; f < c; f++)
            if (a.S[f].type.Y ===
                b) return f;
        return -1
    };
    e.prototype.Ii = function(a, b, f) {
        var c, d, l, e, m;
        m = a.type;
        l = m.Aa;
        if (f) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.O = b.ex : La(a.O);
        if (d = b.ivs)
            for (c in d) d.hasOwnProperty(c) && (f = this.Pq(m, parseInt(c, 10)), 0 > f || f >= a.Va.length || (a.Va[f] = d[c]));
        if (l.de) {
            l = b.w;
            a.u.Y !== l.l && (f = a.u, a.u = this.ea.mi(l.l), a.u ? (a.u.k.push(a), a.u.mc = !0, ya(f.k, a), f.mc = !0) : (a.u = f, this.ef(a)));
            a.x = l.x;
            a.y = l.y;
            a.width = l.w;
            a.height = l.h;
            a.df = l.zi;
            a.q = l.hasOwnProperty("a") ? l.a : 0;
            a.opacity = l.hasOwnProperty("o") ? l.o : 1;
            a.Ob =
                l.hasOwnProperty("hX") ? l.hX : 0.5;
            a.Pb = l.hasOwnProperty("hY") ? l.hY : 0.5;
            a.visible = l.hasOwnProperty("v") ? l.v : !0;
            a.rd = l.hasOwnProperty("ce") ? l.ce : !0;
            a.Yg = l.hasOwnProperty("mts") ? l.mts : -1;
            a.Ib = l.hasOwnProperty("bm") ? l.bm : 0;
            a.eg = Ra(a.Ib);
            this.G && Sa(a, a.Ib, this.G);
            a.F();
            if (l.hasOwnProperty("fx"))
                for (f = 0, d = l.fx.length; f < d; f++) e = m.ok(l.fx[f].name), 0 > e || (a.Sd[e] = l.fx[f].active, a.Ga[e] = l.fx[f].params);
            a.Qd()
        }
        if (m = b.behs)
            for (c in m) m.hasOwnProperty(c) && (l = this.Kq(a, parseInt(c, 10)), 0 > l || a.S[l].ab(m[c]));
        b.data &&
            a.ab(b.data)
    };
    xb = function(a) {
        return new e(document.getElementById(a))
    };
    yb = function(a, b) {
        return new e({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = xb;
    window.cr_createDCRuntime = yb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.cu = !0;
        document.body.appendChild(a);
        a = new e(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new e(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var e = document.getElementById("c2canvas");
    return e ? e.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_sizeCanvas = function(e, k) {
    if (0 !== e && 0 !== k) {
        var c = window.cr_getC2Runtime();
        c && c.setSize(e, k)
    }
};
window.cr_setSuspended = function(e) {
    var k = window.cr_getC2Runtime();
    k && k.setSuspended(e)
};
(function() {
    function e(b, a) {
        this.b = b;
        this.hg = null;
        this.scrollX = this.b.cb / 2;
        this.scrollY = this.b.bb / 2;
        this.scale = 1;
        this.q = 0;
        this.lg = !0;
        this.name = a[0];
        this.width = a[1];
        this.height = a[2];
        this.Go = a[3];
        this.ro = a[4];
        this.Y = a[5];
        var c = a[6],
            f, d;
        this.$ = [];
        this.tg = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var e = new zb(this, c[f]);
            e.On = f;
            this.$.push(e)
        }
        c = a[7];
        this.Ie = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var e = c[f],
                k = this.b.H[e[1]];
            k.yc || (k.yc = e);
            this.Ie.push(e); - 1 === this.tg.indexOf(k) && this.tg.push(k)
        }
        this.Q = [];
        this.ia = [];
        this.Ga = [];
        f = 0;
        for (d = a[8].length; f < d; f++) this.Q.push({
            id: a[8][f][0],
            name: a[8][f][1],
            lb: -1,
            qb: !0,
            index: f
        }), this.Ga.push(a[8][f][2].slice(0));
        this.Qd();
        this.me = new sa(0, 0, 1, 1);
        this.tl = new sa(0, 0, 1, 1);
        this.ke = {}
    }

    function k(b, a) {
        this.wa = b;
        this.b = b.b;
        this.k = [];
        this.scale = 1;
        this.q = 0;
        this.Ae = !1;
        this.Pd = new sa(0, 0, 0, 0);
        this.zo = new ta;
        this.kc = this.ob = this.lc = this.nb = 0;
        this.mc = !1;
        this.name = a[0];
        this.index = a[1];
        this.Y = a[2];
        this.visible = a[3];
        this.Vd = a[4];
        this.bf = a[5];
        this.Sb = a[6];
        this.Tb = a[7];
        this.opacity = a[8];
        this.gk =
            a[9];
        this.Cb = a[10];
        this.Ib = a[11];
        this.fq = a[12];
        this.eg = "source-over";
        this.xb = this.yb = 0;
        this.ne = !1;
        var c = a[13],
            f, d;
        this.zf = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var e = c[f],
                k = this.b.H[e[1]];
            k.yc || (k.yc = e, k.Rp = this.index);
            this.zf.push(e); - 1 === this.wa.tg.indexOf(k) && this.wa.tg.push(k)
        }
        this.Q = [];
        this.ia = [];
        this.Ga = [];
        f = 0;
        for (d = a[14].length; f < d; f++) this.Q.push({
            id: a[14][f][0],
            name: a[14][f][1],
            lb: -1,
            qb: !0,
            index: f
        }), this.Ga.push(a[14][f][2].slice(0));
        this.Qd();
        this.me = new sa(0, 0, 1, 1);
        this.tl = new sa(0, 0, 1, 1)
    }

    function c(b,
        a) {
        return b.df - a.df
    }
    e.prototype.hs = function(b) {
        var a = b.type.Y.toString();
        this.ke.hasOwnProperty(a) || (this.ke[a] = []);
        this.ke[a].push(this.b.Bl(b))
    };
    e.prototype.cn = function() {
        var b = this.$[0];
        return !b.bf && 1 === b.opacity && !b.gk && b.visible
    };
    e.prototype.Qd = function() {
        this.ia.length = 0;
        var b, a, c;
        b = 0;
        for (a = this.Q.length; b < a; b++) c = this.Q[b], c.qb && this.ia.push(c)
    };
    e.prototype.nk = function(b) {
        var a, c, f;
        a = 0;
        for (c = this.Q.length; a < c; a++)
            if (f = this.Q[a], f.name === b) return f;
        return null
    };
    var d = [];
    e.prototype.Jl = function() {
        this.ro &&
            (this.hg = this.b.fk[this.ro], this.hg.Jo());
        this.b.ea = this;
        this.scrollX = this.b.cb / 2;
        this.scrollY = this.b.bb / 2;
        var b, a, l, f, e, k, v;
        b = 0;
        for (l = this.b.H.length; b < l; b++)
            if (a = this.b.H[b], !a.P)
                for (e = a.k, a = 0, f = e.length; a < f; a++)
                    if (k = e[a], k.u) {
                        var m = k.u.On;
                        m >= this.$.length && (m = this.$.length - 1);
                        k.u = this.$[m];
                        k.u.k.push(k);
                        k.u.mc = !0
                    }
        d.length = 0;
        this.Gp();
        b = 0;
        for (l = this.$.length; b < l; b++) k = this.$[b], k.Qp(), k.Ae = !0, a = k.Ra(0, 0, !0, !0), f = k.Ra(0, 0, !1, !0), k.Ae = !1, this.b.dd && (a = a + 0.5 | 0, f = f + 0.5 | 0), k.xl(a, f, null);
        e = !1;
        if (!this.lg) {
            for (v in this.ke)
                if (this.ke.hasOwnProperty(v) &&
                    (a = this.b.ni(parseInt(v, 10))) && !a.P && this.b.Vl(a)) {
                    f = this.ke[v];
                    b = 0;
                    for (l = f.length; b < l; b++) {
                        k = null;
                        if (a.Aa.de && (k = this.mi(f[b].w.l), !k)) continue;
                        k = this.b.Yd(a.yc, k, !1, 0, 0, !0);
                        this.b.Ii(k, f[b]);
                        e = !0;
                        d.push(k)
                    }
                    f.length = 0
                }
            b = 0;
            for (l = this.$.length; b < l; b++) this.$[b].k.sort(c), this.$[b].mc = !0
        }
        e && (this.b.pb(), this.b.io());
        for (b = 0; b < d.length; b++)
            if (k = d[b], k.type.rc)
                for (l = k.qg(), a = 0, f = k.type.Zb.length; a < f; a++) v = k.type.Zb[a], k.type !== v && (v.k.length > l ? k.siblings.push(v.k[l]) : v.yc && (e = this.b.Yd(v.yc, k.u, !0, k.x,
                    k.y, !0), this.b.pb(), v.vj(), k.siblings.push(e), d.push(e)));
        b = 0;
        for (l = this.Ie.length; b < l; b++) this.b.Yd(this.Ie[b], null, !0);
        this.b.dg = null;
        this.b.pb();
        if (this.b.ua && !this.b.da)
            for (b = 0, l = this.b.H.length; b < l; b++) v = this.b.H[b], !v.P && v.k.length && v.nl && v.nl(this.b.ua);
        b = 0;
        for (l = d.length; b < l; b++) k = d[b], this.b.trigger(Object.getPrototypeOf(k.type.Aa).n.Bj, k);
        d.length = 0;
        this.b.trigger(P.prototype.n.gm, null);
        this.lg = !1
    };
    e.prototype.Pp = function() {
        var b, a, c, f, d;
        a = b = 0;
        for (c = this.Ie.length; b < c; b++) f = this.Ie[b], d =
            this.b.H[f[1]], d.global ? this.b.Yd(f, null, !0) : (this.Ie[a] = f, a++);
        this.Ie.length = a
    };
    e.prototype.qs = function() {
        this.b.trigger(P.prototype.n.kp, null);
        this.b.ld.Ub.length = 0;
        var b, a, c, f, d, e;
        b = 0;
        for (a = this.$.length; b < a; b++) {
            d = this.$[b].k;
            c = 0;
            for (f = d.length; c < f; c++) e = d[c], e.type.global || (this.b.Vl(e.type) && this.hs(e), this.b.ef(e));
            this.b.pb();
            d.length = 0;
            this.$[b].mc = !0
        }
        b = 0;
        for (a = this.b.H.length; b < a; b++)
            if (d = this.b.H[b], !(d.global || d.Aa.de || d.Aa.jj || d.P)) {
                c = 0;
                for (f = d.k.length; c < f; c++) this.b.ef(d.k[c]);
                this.b.pb()
            }
    };
    e.prototype.zc = function(b) {
        var a, c = b,
            f = !1,
            d = !this.b.Ac;
        d && (this.b.Gi || (this.b.Gi = document.createElement("canvas"), a = this.b.Gi, a.width = this.b.X, a.height = this.b.W, this.b.Dn = a.getContext("2d"), f = !0), a = this.b.Gi, c = this.b.Dn, a.width !== this.b.X && (a.width = this.b.X, f = !0), a.height !== this.b.W && (a.height = this.b.W, f = !0), f && (c.webkitImageSmoothingEnabled = this.b.ka, c.mozImageSmoothingEnabled = this.b.ka, c.msImageSmoothingEnabled = this.b.ka, c.imageSmoothingEnabled = this.b.ka));
        c.globalAlpha = 1;
        c.globalCompositeOperation =
            "source-over";
        this.b.Fj && !this.cn() && c.clearRect(0, 0, this.b.X, this.b.W);
        var e, k, f = 0;
        for (e = this.$.length; f < e; f++) k = this.$[f], k.visible && 0 < k.opacity && 11 !== k.Ib && k.zc(c);
        d && b.drawImage(a, 0, 0, this.b.width, this.b.height)
    };
    e.prototype.$b = function(b) {
        var a = 0 < this.ia.length || this.b.Uf || !this.b.Ac;
        if (a) {
            this.b.fc || (this.b.fc = b.sd(this.b.X, this.b.W, this.b.ka));
            if (this.b.fc.cg !== this.b.X || this.b.fc.bg !== this.b.W) b.deleteTexture(this.b.fc), this.b.fc = b.sd(this.b.X, this.b.W, this.b.ka);
            b.jd(this.b.fc);
            this.b.Ac ||
                b.Pf(this.b.X, this.b.W)
        } else this.b.fc && (b.jd(null), b.deleteTexture(this.b.fc), this.b.fc = null);
        this.b.Fj && !this.cn() && b.clear(0, 0, 0, 0);
        var c, f;
        c = 0;
        for (f = this.$.length; c < f; c++) this.$[c].visible && 0 < this.$[c].opacity && this.$[c].$b(b);
        a && (0 === this.ia.length || 1 === this.ia.length && this.b.Ac ? (1 === this.ia.length ? (a = this.ia[0].index, b.kd(this.ia[0].lb), b.Of(null, 1 / this.b.X, 1 / this.b.W, 0, 0, 1, 1, this.scale, this.q, 0, 0, this.Ga[a]), b.Wi(this.ia[0].lb) && (this.b.qa = !0)) : b.kd(0), this.b.Ac || b.Pf(this.b.width, this.b.height),
            b.jd(null), b.We(1), b.ic(this.b.fc), b.mo(), b.gd(), b.md(), a = this.b.width / 2, c = this.b.height / 2, b.Zi(-a, c, a, c, a, -c, -a, -c), b.ic(null)) : this.ul(b, null, null, null))
    };
    e.prototype.pg = function() {
        return 0 < this.ia.length || this.b.Uf || !this.b.Ac ? this.b.fc : null
    };
    e.prototype.an = function() {
        var b = this.$[0].Eb(),
            a, c, f;
        a = 1;
        for (c = this.$.length; a < c; a++) f = this.$[a], (0 !== f.Sb || 0 !== f.Tb) && f.Eb() < b && (b = f.Eb());
        return b
    };
    e.prototype.Dl = function(b) {
        if (!this.Go) {
            var a = this.b.X * (1 / this.an()) / 2;
            b > this.width - a && (b = this.width - a);
            b <
                a && (b = a)
        }
        this.scrollX !== b && (this.scrollX = b, this.b.qa = !0)
    };
    e.prototype.El = function(b) {
        if (!this.Go) {
            var a = this.b.W * (1 / this.an()) / 2;
            b > this.height - a && (b = this.height - a);
            b < a && (b = a)
        }
        this.scrollY !== b && (this.scrollY = b, this.b.qa = !0)
    };
    e.prototype.Gp = function() {
        this.Dl(this.scrollX);
        this.El(this.scrollY)
    };
    e.prototype.ul = function(b, a, c, f) {
        var d = c ? c.ia : a ? a.ia : this.ia,
            e = 1,
            k = 0,
            m = 0,
            t = 0;
        c ? (e = c.u.Eb(), k = c.u.oc(), m = c.u.nb, t = c.u.ob) : a && (e = a.Eb(), k = a.oc(), m = a.nb, t = a.ob);
        var w = this.b.jk,
            p, n, g, u, h = 0,
            H = 1,
            ca, J = this.b.X,
            G =
            this.b.W,
            ia = J / 2,
            ja = G / 2,
            V = a ? a.me : this.me,
            K = a ? a.tl : this.tl,
            M = 0,
            I = 0,
            F = 0,
            W = 0,
            C = J,
            X = J,
            B = G,
            N = G,
            aa = g = 0,
            da = c ? c.u.oc() : 0;
        if (c) {
            p = 0;
            for (n = d.length; p < n; p++) g += b.Tq(d[p].lb), aa += b.Uq(d[p].lb);
            u = c.Ka;
            M = a.ja(u.left, u.top, !0, !0);
            F = a.ja(u.left, u.top, !1, !0);
            C = a.ja(u.right, u.bottom, !0, !0);
            B = a.ja(u.right, u.bottom, !1, !0);
            0 !== da && (p = a.ja(u.right, u.top, !0, !0), n = a.ja(u.right, u.top, !1, !0), I = a.ja(u.left, u.bottom, !0, !0), W = a.ja(u.left, u.bottom, !1, !0), u = Math.min(M, C, p, I), C = Math.max(M, C, p, I), M = u, u = Math.min(F, B, n, W), B = Math.max(F,
                B, n, W), F = u);
            M -= g;
            F -= aa;
            C += g;
            B += aa;
            K.left = M / J;
            K.top = 1 - F / G;
            K.right = C / J;
            K.bottom = 1 - B / G;
            I = M = D(M);
            W = F = D(F);
            X = C = qa(C);
            N = B = qa(B);
            I -= g;
            W -= aa;
            X += g;
            N += aa;
            0 > M && (M = 0);
            0 > F && (F = 0);
            C > J && (C = J);
            B > G && (B = G);
            0 > I && (I = 0);
            0 > W && (W = 0);
            X > J && (X = J);
            N > G && (N = G);
            V.left = M / J;
            V.top = 1 - F / G;
            V.right = C / J;
            V.bottom = 1 - B / G
        } else V.left = K.left = 0, V.top = K.top = 0, V.right = K.right = 1, V.bottom = K.bottom = 1;
        aa = c && ((c.q || da) && b.hh(d[0].lb) || 0 !== g || 0 !== aa || 1 !== c.opacity || c.type.Aa.Ln) || a && !c && 1 !== a.opacity;
        b.mo();
        if (aa) {
            w[h] || (w[h] = b.sd(J, G, this.b.ka));
            if (w[h].cg !== J || w[h].bg !== G) b.deleteTexture(w[h]), w[h] = b.sd(J, G, this.b.ka);
            b.kd(0);
            b.jd(w[h]);
            ca = N - W;
            b.clearRect(I, G - W - ca, X - I, ca);
            c ? c.$b(b) : (b.ic(this.b.tc), b.We(a.opacity), b.gd(), b.translate(-ia, -ja), b.md(), b.ed(M, B, C, B, C, F, M, F, V));
            K.left = K.top = 0;
            K.right = K.bottom = 1;
            c && (u = V.top, V.top = V.bottom, V.bottom = u);
            h = 1;
            H = 0
        }
        b.We(1);
        g = d.length - 1;
        var da = b.ol(d[g].lb) || !a && !c && !this.b.Ac,
            Y = 0;
        p = 0;
        for (n = d.length; p < n; p++) {
            w[h] || (w[h] = b.sd(J, G, this.b.ka));
            if (w[h].cg !== J || w[h].bg !== G) b.deleteTexture(w[h]), w[h] = b.sd(J,
                G, this.b.ka);
            b.kd(d[p].lb);
            Y = d[p].index;
            b.Wi(d[p].lb) && (this.b.qa = !0);
            0 != p || aa ? (b.Of(f, 1 / J, 1 / G, K.left, K.top, K.right, K.bottom, e, k, m, t, c ? c.Ga[Y] : a ? a.Ga[Y] : this.Ga[Y]), b.ic(null), p !== g || da ? (b.jd(w[h]), ca = N - W, u = G - W - ca, b.clearRect(I, u, X - I, ca)) : (c ? b.oe(c.yb, c.xb) : a && b.oe(a.yb, a.xb), b.jd(f)), b.ic(w[H]), b.gd(), b.translate(-ia, -ja), b.md(), b.ed(M, B, C, B, C, F, M, F, V), p !== g || da || b.ic(null)) : (b.jd(w[h]), ca = N - W, u = G - W - ca, b.clearRect(I, u, X - I, ca), c ? (b.Of(f, 1 / c.width, 1 / c.height, K.left, K.top, K.right, K.bottom, e, k, m, t, c.Ga[Y]),
                c.$b(b)) : (b.Of(f, 1 / J, 1 / G, 0, 0, 1, 1, e, k, m, t, a ? a.Ga[Y] : this.Ga[Y]), b.ic(a ? this.b.tc : this.b.fc), b.gd(), b.translate(-ia, -ja), b.md(), b.ed(M, B, C, B, C, F, M, F, V)), K.left = K.top = 0, K.right = K.bottom = 1, c && !da && (u = B, B = F, F = u));
            h = 0 === h ? 1 : 0;
            H = 0 === h ? 1 : 0
        }
        da && (b.kd(0), c ? b.oe(c.yb, c.xb) : a ? b.oe(a.yb, a.xb) : this.b.Ac || (b.Pf(this.b.width, this.b.height), ia = this.b.width / 2, ja = this.b.height / 2, F = M = 0, C = this.b.width, B = this.b.height), b.jd(f), b.ic(w[H]), b.gd(), b.translate(-ia, -ja), b.md(), c && 1 === d.length && !aa ? b.ed(M, F, C, F, C, B, M, B, V) : b.ed(M,
            B, C, B, C, F, M, F, V), b.ic(null))
    };
    e.prototype.mi = function(b) {
        var a, c;
        a = 0;
        for (c = this.$.length; a < c; a++)
            if (this.$[a].Y === b) return this.$[a];
        return null
    };
    e.prototype.Qa = function() {
        var b, a, c, f = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.q,
            w: this.width,
            h: this.height,
            fv: this.lg,
            persist: this.ke,
            fx: [],
            layers: {}
        };
        b = 0;
        for (a = this.Q.length; b < a; b++) c = this.Q[b], f.fx.push({
            name: c.name,
            active: c.qb,
            params: this.Ga[c.index]
        });
        b = 0;
        for (a = this.$.length; b < a; b++) c = this.$[b], f.layers[c.Y.toString()] = c.Qa();
        return f
    };
    e.prototype.ab = function(b) {
        var a, c, f, d;
        this.scrollX = b.sx;
        this.scrollY = b.sy;
        this.scale = b.s;
        this.q = b.a;
        this.width = b.w;
        this.height = b.h;
        this.ke = b.persist;
        "undefined" !== typeof b.fv && (this.lg = b.fv);
        var e = b.fx;
        a = 0;
        for (c = e.length; a < c; a++)
            if (f = this.nk(e[a].name)) f.qb = e[a].active, this.Ga[f.index] = e[a].params;
        this.Qd();
        a = b.layers;
        for (d in a) a.hasOwnProperty(d) && (b = this.mi(parseInt(d, 10))) && b.ab(a[d])
    };
    mb = e;
    k.prototype.Qd = function() {
        this.ia.length = 0;
        var b, a, c;
        b = 0;
        for (a = this.Q.length; b < a; b++) c = this.Q[b], c.qb &&
            this.ia.push(c)
    };
    k.prototype.nk = function(b) {
        var a, c, f;
        a = 0;
        for (c = this.Q.length; a < c; a++)
            if (f = this.Q[a], f.name === b) return f;
        return null
    };
    k.prototype.Qp = function() {
        var b, a, c, f, e, k;
        a = b = 0;
        for (c = this.zf.length; b < c; b++) {
            f = this.zf[b];
            e = this.b.H[f[1]];
            k = this.b.Vl(e);
            e = !0;
            if (!k || this.wa.lg) f = this.b.Yd(f, this, !0), d.push(f), f.type.global && (e = !1);
            e && (this.zf[a] = this.zf[b], a++)
        }
        this.zf.length = a;
        this.b.pb();
        !this.b.I && this.Q.length && (this.Ib = this.fq);
        this.eg = Ra(this.Ib);
        this.b.G && Sa(this, this.Ib, this.b.G)
    };
    k.prototype.ys =
        function() {
            if (this.mc) {
                var b, a;
                b = 0;
                for (a = this.k.length; b < a; b++) this.k[b].df = b;
                this.mc = !1
            }
        };
    k.prototype.Eb = function(b) {
        return this.Rq() * (this.b.Ac || b ? this.b.ag : 1)
    };
    k.prototype.Rq = function() {
        return (this.scale * this.wa.scale - 1) * this.Cb + 1
    };
    k.prototype.oc = function() {
        return this.Ae ? 0 : L(this.wa.q + this.q)
    };
    k.prototype.zc = function(b) {
        this.ne = this.gk || 1 !== this.opacity || 0 !== this.Ib;
        var a = this.b.canvas,
            c = b,
            f = !1;
        this.ne && (this.b.Fi || (this.b.Fi = document.createElement("canvas"), a = this.b.Fi, a.width = this.b.X, a.height =
            this.b.W, this.b.Cn = a.getContext("2d"), f = !0), a = this.b.Fi, c = this.b.Cn, a.width !== this.b.X && (a.width = this.b.X, f = !0), a.height !== this.b.W && (a.height = this.b.W, f = !0), f && (c.webkitImageSmoothingEnabled = this.b.ka, c.mozImageSmoothingEnabled = this.b.ka, c.msImageSmoothingEnabled = this.b.ka, c.imageSmoothingEnabled = this.b.ka), this.bf && c.clearRect(0, 0, this.b.X, this.b.W));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.bf || (c.fillStyle = "rgb(" + this.Vd[0] + "," + this.Vd[1] + "," + this.Vd[2] + ")", c.fillRect(0, 0,
            this.b.X, this.b.W));
        c.save();
        this.Ae = !0;
        var f = this.Ra(0, 0, !0, !0),
            d = this.Ra(0, 0, !1, !0);
        this.Ae = !1;
        this.b.dd && (f = f + 0.5 | 0, d = d + 0.5 | 0);
        this.xl(f, d, c);
        var e = this.Eb();
        c.scale(e, e);
        c.translate(-f, -d);
        for (var k, f = 0, d = this.k.length; f < d; f++) e = this.k[f], e.visible && 0 !== e.width && 0 !== e.height && (e.Ea(), k = e.Ka, k.right < this.nb || k.bottom < this.ob || k.left > this.lc || k.top > this.kc || (c.globalCompositeOperation = e.eg, e.zc(c)));
        c.restore();
        this.ne && (b.globalCompositeOperation = this.eg, b.globalAlpha = this.opacity, b.drawImage(a,
            0, 0))
    };
    k.prototype.xl = function(b, a, c) {
        var f = this.Eb();
        this.nb = b;
        this.ob = a;
        this.lc = b + this.b.X * (1 / f);
        this.kc = a + this.b.W * (1 / f);
        b = this.oc();
        0 !== b && (c && (c.translate(this.b.X / 2, this.b.W / 2), c.rotate(-b), c.translate(this.b.X / -2, this.b.W / -2)), this.Pd.set(this.nb, this.ob, this.lc, this.kc), this.Pd.offset((this.nb + this.lc) / -2, (this.ob + this.kc) / -2), this.zo.po(this.Pd, b), this.zo.Bm(this.Pd), this.Pd.offset((this.nb + this.lc) / 2, (this.ob + this.kc) / 2), this.nb = this.Pd.left, this.ob = this.Pd.top, this.lc = this.Pd.right, this.kc =
            this.Pd.bottom)
    };
    k.prototype.$b = function(b) {
        var a = this.b.X,
            c = this.b.W,
            f = 0,
            d = 0;
        if (this.ne = this.gk || 1 !== this.opacity || 0 < this.ia.length || 0 !== this.Ib) {
            this.b.tc || (this.b.tc = b.sd(this.b.X, this.b.W, this.b.ka));
            if (this.b.tc.cg !== this.b.X || this.b.tc.bg !== this.b.W) b.deleteTexture(this.b.tc), this.b.tc = b.sd(this.b.X, this.b.W, this.b.ka);
            b.jd(this.b.tc);
            this.bf && b.clear(0, 0, 0, 0)
        }
        this.bf || b.clear(this.Vd[0] / 255, this.Vd[1] / 255, this.Vd[2] / 255, 1);
        this.Ae = !0;
        var d = this.Ra(0, 0, !0, !0),
            e = this.Ra(0, 0, !1, !0);
        this.Ae = !1;
        this.b.dd && (d = d + 0.5 | 0, e = e + 0.5 | 0);
        this.xl(d, e, null);
        e = this.Eb();
        b.gd();
        b.scale(e, e);
        b.yl(-this.oc());
        b.translate((this.nb + this.lc) / -2, (this.ob + this.kc) / -2);
        b.md();
        var k, m, t;
        k = 0;
        for (m = this.k.length; k < m; k++)
            if (t = this.k[k], t.visible && 0 !== t.width && 0 !== t.height && (t.Ea(), f = t.Ka, !(f.right < this.nb || f.bottom < this.ob || f.left > this.lc || f.top > this.kc)))
                if (t.Mo)
                    if (f = t.ia[0].lb, d = t.ia[0].index, 1 !== t.ia.length || b.ol(f) || b.Yr(f) || (t.q || t.u.oc()) && b.hh(f) || 1 !== t.opacity || t.type.Aa.Ln) this.wa.ul(b, this, t, this.ne ? this.b.tc :
                        this.wa.pg()), b.gd(), b.scale(e, e), b.yl(-this.oc()), b.translate((this.nb + this.lc) / -2, (this.ob + this.kc) / -2), b.md();
                    else {
                        b.kd(f);
                        b.oe(t.yb, t.xb);
                        b.Wi(f) && (this.b.qa = !0);
                        var w = 0,
                            p = 0,
                            n = 0,
                            g = 0;
                        b.hh(f) && (f = t.Ka, w = this.ja(f.left, f.top, !0, !0), p = this.ja(f.left, f.top, !1, !0), n = this.ja(f.right, f.bottom, !0, !0), f = this.ja(f.right, f.bottom, !1, !0), w /= a, p = 1 - p / c, n /= a, g = 1 - f / c);
                        b.Of(this.ne ? this.b.tc : this.wa.pg(), 1 / t.width, 1 / t.height, w, p, n, g, this.Eb(), this.oc(), this.nb, this.ob, t.Ga[d]);
                        t.$b(b)
                    } else b.kd(0), b.oe(t.yb, t.xb),
            t.$b(b);
        this.ne && (f = this.ia.length ? this.ia[0].lb : 0, d = this.ia.length ? this.ia[0].index : 0, 0 === this.ia.length || 1 === this.ia.length && !b.ol(f) && 1 === this.opacity ? (1 === this.ia.length ? (b.kd(f), b.Of(this.wa.pg(), 1 / this.b.X, 1 / this.b.W, 0, 0, 1, 1, this.Eb(), this.oc(), this.nb, this.ob, this.Ga[d]), b.Wi(f) && (this.b.qa = !0)) : b.kd(0), b.jd(this.wa.pg()), b.We(this.opacity), b.ic(this.b.tc), b.oe(this.yb, this.xb), b.gd(), b.md(), a = this.b.X / 2, c = this.b.W / 2, b.Zi(-a, c, a, c, a, -c, -a, -c), b.ic(null)) : this.wa.ul(b, this, null, this.wa.pg()))
    };
    k.prototype.Ra = function(b, a, c, f) {
        var d = this.b.devicePixelRatio;
        this.b.Je && (b *= d, a *= d);
        var d = this.b.Xn,
            e = this.b.Yn,
            d = (this.wa.scrollX - d) * this.Sb + d,
            e = (this.wa.scrollY - e) * this.Tb + e,
            k = 1 / this.Eb(!f);
        f ? (d -= this.b.X * k / 2, e -= this.b.W * k / 2) : (d -= this.b.width * k / 2, e -= this.b.height * k / 2);
        d += b * k;
        e += a * k;
        a = this.oc();
        0 !== a && (d -= this.wa.scrollX, e -= this.wa.scrollY, b = Math.cos(a), a = Math.sin(a), f = d * b - e * a, e = e * b + d * a, d = f + this.wa.scrollX, e += this.wa.scrollY);
        return c ? d : e
    };
    k.prototype.ja = function(b, a, c, f) {
        var d = this.oc();
        if (0 !==
            d) {
            b -= this.wa.scrollX;
            a -= this.wa.scrollY;
            var e = Math.cos(-d),
                d = Math.sin(-d),
                k = b * e - a * d;
            a = a * e + b * d;
            b = k + this.wa.scrollX;
            a += this.wa.scrollY
        }
        e = this.b.Xn;
        d = this.b.Yn;
        e = (this.wa.scrollX - e) * this.Sb + e;
        d = (this.wa.scrollY - d) * this.Tb + d;
        k = 1 / this.Eb(!f);
        f ? (e -= this.b.X * k / 2, d -= this.b.W * k / 2) : (e -= this.b.width * k / 2, d -= this.b.height * k / 2);
        e = (b - e) / k;
        d = (a - d) / k;
        b = this.b.devicePixelRatio;
        this.b.Je && (e /= b, d /= b);
        return c ? e : d
    };
    k.prototype.Qa = function() {
        var b, a, c, f = {
            s: this.scale,
            a: this.q,
            vl: this.nb,
            vt: this.ob,
            vr: this.lc,
            vb: this.kc,
            v: this.visible,
            bc: this.Vd,
            t: this.bf,
            px: this.Sb,
            py: this.Tb,
            o: this.opacity,
            zr: this.Cb,
            fx: [],
            instances: []
        };
        b = 0;
        for (a = this.Q.length; b < a; b++) c = this.Q[b], f.fx.push({
            name: c.name,
            active: c.qb,
            params: this.Ga[c.index]
        });
        return f
    };
    k.prototype.ab = function(b) {
        var a, d;
        this.scale = b.s;
        this.q = b.a;
        this.nb = b.vl;
        this.ob = b.vt;
        this.lc = b.vr;
        this.kc = b.vb;
        this.visible = b.v;
        this.Vd = b.bc;
        this.bf = b.t;
        this.Sb = b.px;
        this.Tb = b.py;
        this.opacity = b.o;
        this.Cb = b.zr;
        var f = b.fx;
        b = 0;
        for (a = f.length; b < a; b++)
            if (d = this.nk(f[b].name)) d.qb = f[b].active,
                this.Ga[d.index] = f[b].params;
        this.Qd();
        this.k.sort(c);
        this.mc = !0
    };
    zb = k
})();
(function() {
    function e(a, b) {
        var c, f = a.length;
        switch (f) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < f; c++)
                    if (a[c] !== b[c]) return !1;
                return !0
        }
    }

    function k(a, b) {
        return a.index - b.index
    }

    function c(a) {
        var b, c, f, d;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(k);
        a.length >= w.length && (w.length = a.length + 1);
        w[a.length] || (w[a.length] = []);
        d = w[a.length];
        b = 0;
        for (c = d.length; b < c; b++)
            if (f = d[b], e(a, f)) return f;
        d.push(a);
        return a
    }

    function d(a, b) {
        this.b = a;
        this.Co = {};
        this.Rm = {};
        this.sk = !1;
        this.hn = new fa;
        this.$j = [];
        this.Gj = [];
        this.name = b[0];
        var c = b[1];
        this.ae = [];
        var f, d;
        f = 0;
        for (d = c.length; f < d; f++) this.kn(c[f], null, this.ae)
    }

    function b(a) {
        this.type = a;
        this.k = [];
        this.ma = [];
        this.na = !0
    }

    function a(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ya = [];
        this.pe = [];
        this.dn = this.rj = this.Sl = this.wk = this.group = this.to = !1;
        this.Za = [];
        this.uc = [];
        this.Kc = [];
        this.rg = "";
        this.pi = this.wk = this.group = !1;
        this.Hm = null;
        c[1] && (this.rg = c[1][1].toLowerCase(),
            this.group = !0, this.wk = !!c[1][0], this.Hm = [], this.pi = this.wk, this.b.nf.push(this), this.b.qi[this.rg] = this);
        this.Sc = c[2];
        this.Y = c[4];
        this.group || (this.b.Am[this.Y.toString()] = this);
        var f = c[5];
        a = 0;
        for (b = f.length; a < b; a++) {
            var d = new Ab(this, f[a]);
            d.index = a;
            this.Za.push(d);
            this.xm(d.type)
        }
        f = c[6];
        a = 0;
        for (b = f.length; a < b; a++) d = new Bb(this, f[a]), d.index = a, this.uc.push(d);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.kn(c[a], this, this.Kc);
        this.xi = !1;
        this.Za.length && (this.xi = null == this.Za[0].type &&
            this.Za[0].hb == P.prototype.n.Ro)
    }

    function l(a, b) {
        var c, f, d;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.rc))
            for (c = 0, f = a.Zb.length; c < f; c++) d = a.Zb[c], a !== d && -1 === b.indexOf(d) && b.push(d)
    }

    function f(a, b) {
        this.nc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.R = [];
        this.xa = [];
        this.O = {};
        this.index = -1;
        this.$f = !1;
        this.hb = b[1];
        this.trigger = 0 < b[3];
        this.Qm = 2 === b[3];
        this.vg = b[5];
        this.Ir = b[6];
        this.Y = b[7];
        this.b.qf[this.Y.toString()] = this; - 1 === b[0] ? (this.type = null, this.Pa = this.Al, this.ze = null, this.wc = -1) : (this.type = this.b.H[b[0]],
            this.Pa = this.Ir ? this.es : this.zl, b[2] ? (this.ze = this.type.ki(b[2]), this.wc = this.type.lk(b[2])) : (this.ze = null, this.wc = -1), this.nc.parent && this.nc.parent.ej());
        this.Qm && (this.Pa = this.gs);
        if (10 === b.length) {
            var c, f, d = b[9];
            c = 0;
            for (f = d.length; c < f; c++) {
                var e = new Cb(this, d[c]);
                this.R.push(e)
            }
            this.xa.length = d.length
        }
    }

    function q(a, b) {
        this.nc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.R = [];
        this.xa = [];
        this.O = {};
        this.index = -1;
        this.$f = !1;
        this.hb = b[1]; - 1 === b[0] ? (this.type = null, this.Pa = this.Al, this.ze = null, this.wc = -1) : (this.type =
            this.b.H[b[0]], this.Pa = this.zl, b[2] ? (this.ze = this.type.ki(b[2]), this.wc = this.type.lk(b[2])) : (this.ze = null, this.wc = -1));
        this.Y = b[3];
        this.b.lf[this.Y.toString()] = this;
        if (6 === b.length) {
            var c, f, d = b[5];
            c = 0;
            for (f = d.length; c < f; c++) {
                var e = new Cb(this, d[c]);
                this.R.push(e)
            }
            this.xa.length = d.length
        }
    }

    function s(a, b) {
        this.L = a;
        this.nc = a.nc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.ad = null;
        this.qe = 0;
        this.get = null;
        this.Gm = 0;
        this.wa = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.zh = this.Xe = this.zh = this.Xe =
            this.Sm = this.Be = this.Ah = null;
        this.Mc = !1;
        var c, f, d;
        switch (b[0]) {
            case 0:
            case 7:
                this.ad = new Db(this, b[1]);
                this.qe = 0;
                this.get = this.$q;
                break;
            case 1:
                this.ad = new Db(this, b[1]);
                this.qe = 0;
                this.get = this.br;
                break;
            case 5:
                this.ad = new Db(this, b[1]);
                this.qe = 0;
                this.get = this.fr;
                break;
            case 3:
            case 8:
                this.Gm = b[1];
                this.get = this.Yq;
                break;
            case 6:
                this.wa = this.b.Nk[b[1]];
                this.get = this.gr;
                break;
            case 9:
                this.key = b[1];
                this.get = this.er;
                break;
            case 4:
                this.object = this.b.H[b[1]];
                this.get = this.hr;
                this.nc.xm(this.object);
                this.L instanceof
                Bb ? this.nc.ej() : this.nc.parent && this.nc.parent.ej();
                break;
            case 10:
                this.index = b[1];
                a.type.P ? (this.get = this.cr, this.Mc = !0) : this.get = this.dr;
                break;
            case 11:
                this.Ah = b[1];
                this.Be = null;
                this.get = this.Zq;
                break;
            case 2:
            case 12:
                this.Sm = b[1];
                this.get = this.Xq;
                break;
            case 13:
                for (this.get = this.ir, this.Xe = [], this.zh = [], c = 1, f = b.length; c < f; c++) d = new Cb(this.L, b[c]), this.Xe.push(d), this.zh.push(0)
        }
    }

    function v(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ya = [];
        this.name = c[1];
        this.No = c[2];
        this.vk = c[3];
        this.zg = !!c[4];
        this.wi = !!c[5];
        this.Y = c[6];
        this.b.Wf[this.Y.toString()] = this;
        this.data = this.vk;
        this.parent ? (this.Qe = this.zg || this.wi ? -1 : this.b.os++, this.b.Cp.push(this)) : (this.Qe = -1, this.b.Bp.push(this))
    }

    function m(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ya = [];
        this.sg = null;
        this.or = c[1];
        this.qb = !0
    }

    function t() {
        this.vo = [];
        this.reset(null)
    }
    var w = [];
    d.prototype.toString = ba("name");
    d.prototype.kn = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a = new Eb(this, b, a);
                if (a.Sc)
                    for (c.push(a), c = 0, b = a.Za.length; c < b; c++) a.Za[c].trigger &&
                        this.ln(a, c);
                else a.tn() ? this.ln(a, 0) : c.push(a);
                break;
            case 1:
                a = new wb(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new Fb(this, b, a), c.push(a)
        }
    };
    d.prototype.La = function() {
        var a, b;
        a = 0;
        for (b = this.ae.length; a < b; a++) this.ae[a].La(a < b - 1 && this.ae[a + 1].xi)
    };
    d.prototype.Jo = function() {
        this.$j.length = 0;
        this.Gj.length = 0;
        this.wm(this);
        this.Gj.length = 0
    };
    d.prototype.wm = function(a) {
        var b, c, f, d, e = a.$j,
            l = a.Gj,
            m = this.hn.cf();
        b = 0;
        for (c = m.length; b < c; ++b) f = m[b], d = f.sg, !f.qb || a === d || -1 < l.indexOf(d) || (l.push(d), d.wm(a), e.push(d))
    };
    d.prototype.Pa = function(a) {
        this.b.bu || (this.sk = !0, a || (this.b.Bk = !0));
        var b, c;
        b = 0;
        for (c = this.ae.length; b < c; b++) {
            var f = this.ae[b];
            f.Pa();
            this.b.Rj(f.ya);
            this.b.$c.Pc() && !this.b.Kb.length || this.b.pb()
        }
        a || (this.b.Bk = !1)
    };
    d.prototype.ln = function(a, b) {
        a.Sc || this.b.uj.push(a);
        var c, f, d = a.Za[b],
            e;
        e = d.type ? d.type.name : "system";
        var l = (c = d.Qm) ? this.Rm : this.Co;
        l[e] || (l[e] = []);
        e = l[e];
        l = d.hb;
        if (c) {
            if (d.R.length && (d = d.R[0], 1 === d.type && 2 === d.ad.type)) {
                d = d.ad.value.toLowerCase();
                c = 0;
                for (f = e.length; c < f; c++)
                    if (e[c].method ==
                        l) {
                        c = e[c].ig;
                        c[d] ? c[d].push([a, b]) : c[d] = [
                            [a, b]
                        ];
                        return
                    }
                c = {};
                c[d] = [
                    [a, b]
                ];
                e.push({
                    method: l,
                    ig: c
                })
            }
        } else {
            c = 0;
            for (f = e.length; c < f; c++)
                if (e[c].method == l) {
                    e[c].ig.push([a, b]);
                    return
                }
            R && l === R.prototype.n.jf ? e.unshift({
                method: l,
                ig: [
                    [a, b]
                ]
            }) : e.push({
                method: l,
                ig: [
                    [a, b]
                ]
            })
        }
    };
    nb = d;
    b.prototype.rk = function() {
        return this.na ? this.type.k.length : this.k.length
    };
    b.prototype.pc = function() {
        return this.na ? this.type.k : this.k
    };
    b.prototype.gh = function(a) {
        a && (a.b.ib().Lb.Sc ? (this.na && (this.k.length = 0, wa(this.ma, a.type.k), this.na = !1), a = this.ma.indexOf(a), -1 !== a && (this.k.push(this.ma[a]), this.ma.splice(a, 1))) : (this.na = !1, this.k.length = 1, this.k[0] = a))
    };
    Xa = b;
    window._c2hh_ = "106FC8FAA71857530F21FF84BC16F83AFB53D46C";
    a.prototype.La = function(a) {
        var b, f = this.parent;
        if (this.group)
            for (this.rj = !0; f;) {
                if (!f.group) {
                    this.rj = !1;
                    break
                }
                f = f.parent
            }
        this.Sl = !this.tn() && (!this.parent || this.parent.group && this.parent.rj);
        this.dn = !!a;
        this.pe = this.ya.slice(0);
        for (f = this.parent; f;) {
            a = 0;
            for (b = f.ya.length; a < b; a++) this.Ap(f.ya[a]);
            f = f.parent
        }
        this.ya =
            c(this.ya);
        this.pe = c(this.pe);
        a = 0;
        for (b = this.Za.length; a < b; a++) this.Za[a].La();
        a = 0;
        for (b = this.uc.length; a < b; a++) this.uc[a].La();
        a = 0;
        for (b = this.Kc.length; a < b; a++) this.Kc[a].La(a < b - 1 && this.Kc[a + 1].xi)
    };
    a.prototype.xm = function(a) {
        l(a, this.ya)
    };
    a.prototype.Ap = function(a) {
        l(a, this.pe)
    };
    a.prototype.ej = function() {
        this.to = !0;
        this.parent && this.parent.ej()
    };
    a.prototype.tn = function() {
        return this.Za.length ? this.Za[0].trigger : !1
    };
    a.prototype.Pa = function() {
        var a, b = !1,
            c, f = this.b,
            d = this.b.ib();
        d.Lb = this;
        var e = this.Za;
        this.xi || (d.dk = !1);
        if (this.Sc) {
            0 === e.length && (b = !0);
            d.Sa = 0;
            for (a = e.length; d.Sa < a; d.Sa++) e[d.Sa].trigger || (c = e[d.Sa].Pa()) && (b = !0);
            (d.Ne = b) && this.cj()
        } else {
            d.Sa = 0;
            for (a = e.length; d.Sa < a; d.Sa++)
                if (c = e[d.Sa].Pa(), !c) {
                    d.Ne = !1;
                    !this.Sl || f.$c.Pc() && !f.Kb.length || f.pb();
                    return
                }
            d.Ne = !0;
            this.cj()
        }
        this.hq(d)
    };
    a.prototype.hq = function(a) {
        a.Ne && this.dn && (a.dk = !0);
        !this.Sl || this.b.$c.Pc() && !this.b.Kb.length || this.b.pb()
    };
    a.prototype.cs = function(a) {
        this.b.ib().Lb = this;
        this.Za[a].Pa() && (this.cj(), this.b.ib().Ne = !0)
    };
    a.prototype.cj = function() {
        var a = this.b.ib(),
            b;
        a.Hb = 0;
        for (b = this.uc.length; a.Hb < b; a.Hb++)
            if (this.uc[a.Hb].Pa()) return;
        this.lo()
    };
    a.prototype.$r = function() {
        var a = this.b.ib(),
            b;
        for (b = this.uc.length; a.Hb < b; a.Hb++)
            if (this.uc[a.Hb].Pa()) return;
        this.lo()
    };
    a.prototype.lo = function() {
        if (this.Kc.length) {
            var a, b, c, f, d = this.Kc.length - 1;
            this.b.Yi(this);
            if (this.to)
                for (a = 0, b = this.Kc.length; a < b; a++) c = this.Kc[a], (f = !this.rj || !this.group && a < d) && this.b.Xi(c.ya), c.Pa(), f ? this.b.Se(c.ya) : this.b.Rj(c.ya);
            else
                for (a = 0, b =
                    this.Kc.length; a < b; a++) this.Kc[a].Pa();
            this.b.Vi()
        }
    };
    a.prototype.ds = function() {
        var a = this.b.ib();
        a.Lb = this;
        var b = !1,
            c;
        a.Sa = 0;
        for (c = this.Za.length; a.Sa < c; a.Sa++)
            if (this.Za[a.Sa].Pa()) b = !0;
            else if (!this.Sc) return !1;
        return this.Sc ? b : !0
    };
    a.prototype.as = function() {
        this.b.tf++;
        var a = this.b.ib().Sa,
            b = this.b.Yi(this);
        if (!this.Sc)
            for (b.Sa = a + 1, a = this.Za.length; b.Sa < a; b.Sa++)
                if (!this.Za[b.Sa].Pa()) {
                    this.b.Vi();
                    return
                }
        this.cj();
        this.b.Vi()
    };
    a.prototype.Br = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <=
            b; --b)
            if (this.Za[b].type === a.type) return !1;
        return !0
    };
    Eb = a;
    f.prototype.La = function() {
        var a, b, c;
        a = 0;
        for (b = this.R.length; a < b; a++) c = this.R[a], c.La(), c.Mc && (this.$f = !0)
    };
    f.prototype.gs = x(!0);
    f.prototype.Al = function() {
        var a, b;
        a = 0;
        for (b = this.R.length; a < b; a++) this.xa[a] = this.R[a].get();
        return Ia(this.hb.apply(this.b.ld, this.xa), this.vg)
    };
    f.prototype.es = function() {
        var a, b;
        a = 0;
        for (b = this.R.length; a < b; a++) this.xa[a] = this.R[a].get();
        a = this.hb.apply(this.ze ? this.ze : this.type, this.xa);
        this.type.vc();
        return a
    };
    f.prototype.zl = function() {
        var a, b, c, f, d, e, l, m, k = this.type,
            n = k.ca(),
            q = this.nc.Sc && !this.trigger;
        b = 0;
        var p = k.rc,
            w = k.P,
            t = k.wd,
            s = this.wc,
            v = -1 < s,
            X = this.$f,
            B = this.R,
            N = this.xa,
            aa = this.vg,
            da = this.hb,
            Y;
        if (X)
            for (b = 0, d = B.length; b < d; ++b) e = B[b], e.Mc || (N[b] = e.get(0));
        else
            for (b = 0, d = B.length; b < d; ++b) N[b] = B[b].get(0);
        if (n.na) {
            n.k.length = 0;
            n.ma.length = 0;
            Y = k.k;
            a = 0;
            for (f = Y.length; a < f; ++a) {
                m = Y[a];
                if (X)
                    for (b = 0, d = B.length; b < d; ++b) e = B[b], e.Mc && (N[b] = e.get(a));
                v ? (b = 0, w && (b = m.type.wf[t]), b = da.apply(m.S[s + b], N)) : b = da.apply(m,
                    N);
                (l = Ia(b, aa)) ? n.k.push(m): q && n.ma.push(m)
            }
            k.finish && k.finish(!0);
            n.na = !1;
            k.vc();
            return n.rk()
        }
        c = 0;
        Y = (l = q && !this.nc.Br(this)) ? n.ma : n.k;
        var Ka = !1;
        a = 0;
        for (f = Y.length; a < f; ++a) {
            m = Y[a];
            if (X)
                for (b = 0, d = B.length; b < d; ++b) e = B[b], e.Mc && (N[b] = e.get(a));
            v ? (b = 0, w && (b = m.type.wf[t]), b = da.apply(m.S[s + b], N)) : b = da.apply(m, N);
            if (Ia(b, aa))
                if (Ka = !0, l) {
                    if (n.k.push(m), p)
                        for (b = 0, d = m.siblings.length; b < d; b++) e = m.siblings[b], e.type.ca().k.push(e)
                } else {
                    Y[c] = m;
                    if (p)
                        for (b = 0, d = m.siblings.length; b < d; b++) e = m.siblings[b], e.type.ca().k[c] =
                            e;
                    c++
                } else if (l) {
                Y[c] = m;
                if (p)
                    for (b = 0, d = m.siblings.length; b < d; b++) e = m.siblings[b], e.type.ca().ma[c] = e;
                c++
            } else if (q && (n.ma.push(m), p))
                for (b = 0, d = m.siblings.length; b < d; b++) e = m.siblings[b], e.type.ca().ma.push(e)
        }
        Y.length = c;
        if (p)
            for (w = k.Zb, a = 0, f = w.length; a < f; a++) m = w[a].ca(), l ? m.ma.length = c : m.k.length = c;
        c = Ka;
        if (l && !Ka)
            for (a = 0, f = n.k.length; a < f; a++) {
                m = n.k[a];
                if (X)
                    for (b = 0, d = B.length; b < d; b++) e = B[b], e.Mc && (N[b] = e.get(a));
                b = v ? da.apply(m.S[s], N) : da.apply(m, N);
                if (Ia(b, aa)) {
                    Ka = !0;
                    break
                }
            }
        k.finish && k.finish(c || q);
        return q ? Ka : n.rk()
    };
    Ab = f;
    q.prototype.La = function() {
        var a, b, c;
        a = 0;
        for (b = this.R.length; a < b; a++) c = this.R[a], c.La(), c.Mc && (this.$f = !0)
    };
    q.prototype.Al = function() {
        var a, b;
        a = 0;
        for (b = this.R.length; a < b; a++) this.xa[a] = this.R[a].get();
        return this.hb.apply(this.b.ld, this.xa)
    };
    q.prototype.zl = function() {
        var a = this.type.ca().pc(),
            b = this.type.P,
            c = this.type.wd,
            f = this.wc,
            d = -1 < f,
            e = this.$f,
            l = this.R,
            m = this.xa,
            k = this.hb,
            n, q, p, w, s, t;
        if (e)
            for (q = 0, w = l.length; q < w; ++q) s = l[q], s.Mc || (m[q] = s.get(0));
        else
            for (q = 0, w = l.length; q <
                w; ++q) m[q] = l[q].get(0);
        n = 0;
        for (p = a.length; n < p; ++n) {
            t = a[n];
            if (e)
                for (q = 0, w = l.length; q < w; ++q) s = l[q], s.Mc && (m[q] = s.get(n));
            d ? (q = 0, b && (q = t.type.wf[c]), k.apply(t.S[f + q], m)) : k.apply(t, m)
        }
        return !1
    };
    Bb = q;
    var p = [],
        n = -1;
    s.prototype.La = function() {
        var a, b;
        if (11 === this.type) this.Be = this.b.Ym(this.Ah, this.nc.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Xe.length; a < b; a++) this.Xe[a].La();
        this.ad && this.ad.La()
    };
    s.prototype.Mr = function(a) {
        this.Mc || !a || a.Aa.jj || (this.Mc = !0)
    };
    s.prototype.no = function() {
        this.Mc = !0
    };
    s.prototype.Xa =
        function() {
            n++;
            p.length === n && p.push(new Gb);
            return p[n]
        };
    s.prototype.Oa = function() {
        n--
    };
    s.prototype.$q = function(a) {
        this.qe = a || 0;
        a = this.Xa();
        this.ad.get(a);
        this.Oa();
        return a.data
    };
    s.prototype.br = function(a) {
        this.qe = a || 0;
        a = this.Xa();
        this.ad.get(a);
        this.Oa();
        return A(a.data) ? a.data : ""
    };
    s.prototype.hr = ba("object");
    s.prototype.Yq = ba("Gm");
    s.prototype.fr = function(a) {
        this.qe = a || 0;
        a = this.Xa();
        this.ad.get(a);
        this.Oa();
        return a.$a() ? this.b.yd(a.data) : this.b.ng(a.data)
    };
    s.prototype.gr = ba("wa");
    s.prototype.er =
        ba("key");
    s.prototype.dr = ba("index");
    s.prototype.cr = function(a) {
        a = a || 0;
        var b = this.L.type,
            c = null,
            c = b.ca(),
            f = c.pc();
        if (f.length) c = f[a % f.length].type;
        else if (c.ma.length) c = c.ma[a % c.ma.length].type;
        else if (b.k.length) c = b.k[a % b.k.length].type;
        else return 0;
        return this.index + c.di[b.wd]
    };
    s.prototype.Zq = ba("Be");
    s.prototype.Xq = ba("Sm");
    s.prototype.ir = function() {
        var a, b;
        a = 0;
        for (b = this.Xe.length; a < b; a++) this.zh[a] = this.Xe[a].get();
        return this.zh
    };
    Cb = s;
    v.prototype.La = function() {
        this.ya = c(this.ya)
    };
    v.prototype.fj =
        function(a) {
            var b = this.b.Xm();
            this.parent && !this.zg && b ? (this.Qe >= b.length && (b.length = this.Qe + 1), b[this.Qe] = a) : this.data = a
        };
    v.prototype.oi = function() {
        var a = this.b.Xm();
        return !this.parent || this.zg || !a || this.wi ? this.data : this.Qe >= a.length || "undefined" === typeof a[this.Qe] ? this.vk : a[this.Qe]
    };
    v.prototype.Pa = function() {
        !this.parent || this.zg || this.wi || this.fj(this.vk)
    };
    wb = v;
    m.prototype.toString = function() {
        return "include:" + this.sg.toString()
    };
    m.prototype.La = function() {
        this.sg = this.b.fk[this.or];
        this.sheet.hn.add(this);
        this.ya = c(this.ya);
        for (var a = this.parent; a;) a.group && a.Hm.push(this), a = a.parent;
        this.ws()
    };
    m.prototype.Pa = function() {
        this.parent && this.b.jh(this.b.H);
        this.sg.sk || this.sg.Pa(!0);
        this.parent && this.b.Se(this.b.H)
    };
    m.prototype.ws = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.pi) {
                this.qb = !1;
                return
            }
            a = a.parent
        }
        this.qb = !0
    };
    Fb = m;
    t.prototype.reset = function(a) {
        this.Lb = a;
        this.Hb = this.Sa = 0;
        this.vo.length = 0;
        this.dk = this.Ne = !1
    };
    vb = t
})();
(function() {
    function e(c, d) {
        this.L = c;
        this.b = c.b;
        this.type = d[0];
        this.get = [this.tq, this.pq, this.Bq, this.Eq, this.jq, this.Cq, this.xq, this.mq, this.wq, this.Aq, this.kq, this.zq, this.nq, this.yq, this.uq, this.vq, this.qq, this.rq, this.lq, this.Dq, this.Om, this.sq, this.Om, this.oq][this.type];
        var b = null;
        this.Rb = this.R = this.xa = this.hb = this.oj = this.eb = this.first = this.value = null;
        this.wc = -1;
        this.zd = null;
        this.Yl = -1;
        this.Be = this.Ah = null;
        this.lh = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = d[1];
                break;
            case 3:
                this.first =
                    new Db(c, d[1]);
                break;
            case 18:
                this.first = new Db(c, d[1]);
                this.eb = new Db(c, d[2]);
                this.oj = new Db(c, d[3]);
                break;
            case 19:
                this.hb = d[1];
                this.hb !== P.prototype.Ta.random && this.hb !== P.prototype.Ta.Np || this.L.no();
                this.xa = [];
                this.R = [];
                3 === d.length ? (b = d[2], this.xa.length = b.length + 1) : this.xa.length = 1;
                break;
            case 20:
                this.Rb = this.b.H[d[1]];
                this.wc = -1;
                this.hb = d[2];
                this.lh = d[3];
                Ib.To && this.hb === Ib.To.prototype.Ta.Ls && this.L.no();
                this.zd = d[4] ? new Db(c, d[4]) : null;
                this.xa = [];
                this.R = [];
                6 === d.length ? (b = d[5], this.xa.length =
                    b.length + 1) : this.xa.length = 1;
                break;
            case 21:
                this.Rb = this.b.H[d[1]];
                this.lh = d[2];
                this.zd = d[3] ? new Db(c, d[3]) : null;
                this.Yl = d[4];
                break;
            case 22:
                this.Rb = this.b.H[d[1]];
                this.Rb.ki(d[2]);
                this.wc = this.Rb.lk(d[2]);
                this.hb = d[3];
                this.lh = d[4];
                this.zd = d[5] ? new Db(c, d[5]) : null;
                this.xa = [];
                this.R = [];
                7 === d.length ? (b = d[6], this.xa.length = b.length + 1) : this.xa.length = 1;
                break;
            case 23:
                this.Ah = d[1], this.Be = null
        }
        this.L.Mr(this.Rb);
        4 <= this.type && 17 >= this.type && (this.first = new Db(c, d[1]), this.eb = new Db(c, d[2]));
        if (b) {
            var a, e;
            a = 0;
            for (e = b.length; a < e; a++) this.R.push(new Db(c, b[a]))
        }
    }

    function k(c, d) {
        this.type = c || O.gf;
        this.data = d || 0;
        this.Lf = null;
        this.type == O.gf && (this.data = Math.floor(this.data))
    }
    e.prototype.La = function() {
        23 === this.type && (this.Be = this.L.b.Ym(this.Ah, this.L.nc.parent));
        this.first && this.first.La();
        this.eb && this.eb.La();
        this.oj && this.oj.La();
        this.zd && this.zd.La();
        if (this.R) {
            var c, d;
            c = 0;
            for (d = this.R.length; c < d; c++) this.R[c].La()
        }
    };
    e.prototype.Dq = function(c) {
        this.xa[0] = c;
        c = this.L.Xa();
        var d, b;
        d = 0;
        for (b = this.R.length; d <
            b; d++) this.R[d].get(c), this.xa[d + 1] = c.data;
        this.L.Oa();
        this.hb.apply(this.b.ld, this.xa)
    };
    e.prototype.Om = function(c) {
        var d = this.Rb.ca(),
            b = d.pc();
        if (!b.length)
            if (d.ma.length) b = d.ma;
            else {
                this.lh ? c.Ic("") : c.Ba(0);
                return
            }
        this.xa[0] = c;
        c.Lf = this.Rb;
        c = this.L.Xa();
        var a, d = 0;
        for (a = this.R.length; d < a; d++) this.R[d].get(c), this.xa[d + 1] = c.data;
        d = this.L.qe;
        this.zd && (this.zd.get(c), c.$a() && (d = c.data, b = this.Rb.k));
        this.L.Oa();
        d %= b.length;
        0 > d && (d += b.length);
        b = b[d]; - 1 < this.wc ? (c = 0, this.Rb.P && (c = b.type.wf[this.Rb.wd]),
            this.hb.apply(b.S[this.wc + c], this.xa)) : this.hb.apply(b, this.xa)
    };
    e.prototype.sq = function(c) {
        var d = this.Rb.ca(),
            b = d.pc();
        if (!b.length)
            if (d.ma.length) b = d.ma;
            else {
                this.lh ? c.Ic("") : c.Ba(0);
                return
            }
        d = this.L.qe;
        if (this.zd) {
            var a = this.L.Xa();
            this.zd.get(a);
            if (a.$a()) {
                d = a.data;
                b = this.Rb.k;
                d %= b.length;
                0 > d && (d += b.length);
                b = b[d].Va[this.Yl];
                A(b) ? c.Ic(b) : c.M(b);
                this.L.Oa();
                return
            }
            this.L.Oa()
        }
        d %= b.length;
        0 > d && (d += b.length);
        b = b[d];
        d = 0;
        this.Rb.P && (d = b.type.di[this.Rb.wd]);
        b = b.Va[this.Yl + d];
        A(b) ? c.Ic(b) : c.M(b)
    };
    e.prototype.tq =
        function(c) {
            c.type = O.gf;
            c.data = this.value
        };
    e.prototype.pq = function(c) {
        c.type = O.ff;
        c.data = this.value
    };
    e.prototype.Bq = function(c) {
        c.type = O.Gh;
        c.data = this.value
    };
    e.prototype.Eq = function(c) {
        this.first.get(c);
        c.$a() && (c.data = -c.data)
    };
    e.prototype.jq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.$a() && d.$a() && (c.data += d.data, d.Df() && c.Jf());
        this.L.Oa()
    };
    e.prototype.Cq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.$a() && d.$a() && (c.data -= d.data, d.Df() && c.Jf());
        this.L.Oa()
    };
    e.prototype.xq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.$a() && d.$a() && (c.data *= d.data, d.Df() && c.Jf());
        this.L.Oa()
    };
    e.prototype.mq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.$a() && d.$a() && (c.data /= d.data, c.Jf());
        this.L.Oa()
    };
    e.prototype.wq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.$a() && d.$a() && (c.data %= d.data, d.Df() && c.Jf());
        this.L.Oa()
    };
    e.prototype.Aq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.$a() && d.$a() &&
            (c.data = Math.pow(c.data, d.data), d.Df() && c.Jf());
        this.L.Oa()
    };
    e.prototype.kq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.$a() ? d.yi() ? c.Ic(c.data.toString() + d.data) : c.data && d.data ? c.Ba(1) : c.Ba(0) : c.yi() && (c.data = d.yi() ? c.data + d.data : c.data + (Math.round(1E10 * d.data) / 1E10).toString());
        this.L.Oa()
    };
    e.prototype.zq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.$a() && d.$a() && (c.data || d.data ? c.Ba(1) : c.Ba(0));
        this.L.Oa()
    };
    e.prototype.lq = function(c) {
        this.first.get(c);
        c.data ?
            this.eb.get(c) : this.oj.get(c)
    };
    e.prototype.nq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.Ba(c.data === d.data ? 1 : 0);
        this.L.Oa()
    };
    e.prototype.yq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.Ba(c.data !== d.data ? 1 : 0);
        this.L.Oa()
    };
    e.prototype.uq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.Ba(c.data < d.data ? 1 : 0);
        this.L.Oa()
    };
    e.prototype.vq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.Ba(c.data <= d.data ? 1 : 0);
        this.L.Oa()
    };
    e.prototype.qq =
        function(c) {
            this.first.get(c);
            var d = this.L.Xa();
            this.eb.get(d);
            c.Ba(c.data > d.data ? 1 : 0);
            this.L.Oa()
        };
    e.prototype.rq = function(c) {
        this.first.get(c);
        var d = this.L.Xa();
        this.eb.get(d);
        c.Ba(c.data >= d.data ? 1 : 0);
        this.L.Oa()
    };
    e.prototype.oq = function(c) {
        var d = this.Be.oi();
        z(d) ? c.M(d) : c.Ic(d)
    };
    Db = e;
    k.prototype.Df = function() {
        return this.type === O.ff
    };
    k.prototype.$a = function() {
        return this.type === O.gf || this.type === O.ff
    };
    k.prototype.yi = function() {
        return this.type === O.Gh
    };
    k.prototype.Jf = function() {
        this.Df() || (this.yi() &&
            (this.data = parseFloat(this.data)), this.type = O.ff)
    };
    k.prototype.Ba = function(c) {
        this.type = O.gf;
        this.data = Math.floor(c)
    };
    k.prototype.M = function(c) {
        this.type = O.ff;
        this.data = c
    };
    k.prototype.Ic = function(c) {
        this.type = O.Gh;
        this.data = c
    };
    k.prototype.ls = function(c) {
        z(c) ? (this.type = O.ff, this.data = c) : A(c) ? (this.type = O.Gh, this.data = c.toString()) : (this.type = O.gf, this.data = 0)
    };
    Gb = k;
    O = {
        gf: 0,
        ff: 1,
        Gh: 2
    }
})();

function P(e) {
    this.b = e;
    this.Ub = []
}
P.prototype.Qa = function() {
    var e = {},
        k, c, d, b, a, l, f, q;
    e.waits = [];
    var s = e.waits,
        v;
    k = 0;
    for (c = this.Ub.length; k < c; k++) {
        l = this.Ub[k];
        v = {
            t: l.time,
            ev: l.sf.Y,
            sm: [],
            sols: {}
        };
        l.sf.uc[l.Hb] && (v.act = l.sf.uc[l.Hb].Y);
        d = 0;
        for (b = l.ya.length; d < b; d++) v.sm.push(l.ya[d].Y);
        for (a in l.Gb)
            if (l.Gb.hasOwnProperty(a)) {
                f = this.b.H[parseInt(a, 10)];
                q = {
                    sa: l.Gb[a].dj,
                    insts: []
                };
                d = 0;
                for (b = l.Gb[a].Ad.length; d < b; d++) q.insts.push(l.Gb[a].Ad[d].uid);
                v.sols[f.Y.toString()] = q
            }
        s.push(v)
    }
    return e
};
P.prototype.ab = function(e) {
    e = e.waits;
    var k, c, d, b, a, l, f, q, s, v, m;
    k = this.Ub.length = 0;
    for (c = e.length; k < c; k++)
        if (l = e[k], q = this.b.Am[l.ev.toString()]) {
            s = -1;
            d = 0;
            for (b = q.uc.length; d < b; d++)
                if (q.uc[d].Y === l.act) {
                    s = d;
                    break
                }
            if (-1 !== s) {
                f = {
                    Gb: {},
                    ya: [],
                    bk: !1
                };
                f.time = l.t;
                f.sf = q;
                f.Hb = s;
                d = 0;
                for (b = l.sm.length; d < b; d++)(q = this.b.ni(l.sm[d])) && f.ya.push(q);
                for (a in l.sols)
                    if (l.sols.hasOwnProperty(a) && (q = this.b.ni(parseInt(a, 10)))) {
                        s = l.sols[a];
                        v = {
                            dj: s.sa,
                            Ad: []
                        };
                        d = 0;
                        for (b = s.insts.length; d < b; d++)(m = this.b.og(s.insts[d])) &&
                            v.Ad.push(m);
                        f.Gb[q.index.toString()] = v
                    }
                this.Ub.push(f)
            }
        }
};
(function() {
    function e() {}

    function k() {}

    function c() {}
    var d = P.prototype;
    e.prototype.gm = x(!0);
    e.prototype.kp = x(!0);
    e.prototype.So = function(a) {
        var b = this.b.li(),
            c = b.O.Dh || 0,
            d = this.b.Ed.mb;
        "undefined" === typeof b.O.zj && (b.O.zj = a);
        var e = b.O.zj;
        if (d >= c + e) return b.O.Dh = c + e, d >= b.O.Dh + 0.04 && (b.O.Dh = d), b.O.zj = a, !0;
        d < c - 0.1 && (b.O.Dh = d);
        return !1
    };
    e.prototype.Ro = function() {
        var a = this.b.ib();
        return a.dk ? !1 : !a.Ne
    };
    e.prototype.hm = x(!0);
    e.prototype.bp = x(!0);
    e.prototype.Dj = x(!0);
    e.prototype.lp = x(!0);
    e.prototype.Cj =
        x(!0);
    d.n = new e;
    k.prototype.fa = function(a) {
        this.b.Ag || this.b.dg || (this.b.dg = a)
    };
    k.prototype.ra = function(a, b) {
        0 === a.No ? z(b) ? a.fj(a.oi() + b) : a.fj(a.oi() + parseFloat(b)) : 1 === a.No && a.fj(a.oi() + b.toString())
    };
    k.prototype.nm = function(a) {
        0 > a && (a = 0);
        this.b.$e = a
    };
    var b = [],
        a = [];
    k.prototype.up = function(c) {
        if (!(0 > c)) {
            var f, d, e, k = this.b.ib(),
                m;
            m = b.length ? b.pop() : {
                Gb: {},
                ya: []
            };
            m.bk = !1;
            m.time = this.b.Ed.mb + c;
            m.sf = k.Lb;
            m.Hb = k.Hb + 1;
            c = 0;
            for (f = this.b.H.length; c < f; c++) e = this.b.H[c], d = e.ca(), d.na && -1 === k.Lb.ya.indexOf(e) ||
                (m.ya.push(e), e = void 0, e = a.length ? a.pop() : {
                    Ad: []
                }, e.dj = !1, e.dj = d.na, wa(e.Ad, d.k), m.Gb[c.toString()] = e);
            this.Ub.push(m);
            return !0
        }
    };
    d.j = new k;
    c.prototype["int"] = function(a, b) {
        A(b) ? (a.Ba(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.Ba(b)
    };
    c.prototype["float"] = function(a, b) {
        A(b) ? (a.M(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.M(b)
    };
    c.prototype.random = function(a, b, c) {
        void 0 === c ? a.M(Math.random() * b) : a.M(Math.random() * (c - b) + b)
    };
    c.prototype.sqrt = function(a, b) {
        a.M(Math.sqrt(b))
    };
    c.prototype.abs = function(a,
        b) {
        a.M(Math.abs(b))
    };
    c.prototype.round = function(a, b) {
        a.Ba(Math.round(b))
    };
    c.prototype.floor = function(a, b) {
        a.Ba(Math.floor(b))
    };
    c.prototype.ceil = function(a, b) {
        a.Ba(Math.ceil(b))
    };
    c.prototype.sin = function(a, b) {
        a.M(Math.sin(E(b)))
    };
    c.prototype.cos = function(a, b) {
        a.M(Math.cos(E(b)))
    };
    c.prototype.tan = function(a, b) {
        a.M(Math.tan(E(b)))
    };
    c.prototype.acos = function(a, b) {
        a.M(za(Math.acos(b)))
    };
    c.prototype.max = function(a) {
        var b = arguments[1],
            c, d;
        c = 2;
        for (d = arguments.length; c < d; c++) b < arguments[c] && (b = arguments[c]);
        a.M(b)
    };
    c.prototype.min = function(a) {
        var b = arguments[1],
            c, d;
        c = 2;
        for (d = arguments.length; c < d; c++) b > arguments[c] && (b = arguments[c]);
        a.M(b)
    };
    c.prototype.rf = function(a) {
        a.M(this.b.rf)
    };
    c.prototype.$e = function(a) {
        a.M(this.b.$e)
    };
    c.prototype.time = function(a) {
        a.M(this.b.Ed.mb)
    };
    c.prototype.Lc = function(a) {
        a.Ba(this.b.Lc)
    };
    c.prototype.Pi = function(a) {
        a.Ba(this.b.Pi)
    };
    c.prototype.hk = function(a) {
        a.Ba(this.b.hk)
    };
    c.prototype.q = function(a, b, c, d, e) {
        a.M(za(Da(b, c, d, e)))
    };
    c.prototype.left = function(a, b, c) {
        a.Ic(A(b) ? b.substr(0,
            c) : "")
    };
    c.prototype.right = function(a, b, c) {
        a.Ic(A(b) ? b.substr(b.length - c) : "")
    };
    c.prototype.replace = function(a, b, c, d) {
        A(b) && A(c) && A(d) ? a.Ic(b.replace(RegExp(Oa(c), "gi"), d)) : a.Ic(A(b) ? b : "")
    };
    c.prototype.Np = function(a) {
        var b = D(Math.random() * (arguments.length - 1));
        a.ls(arguments[b + 1])
    };
    c.prototype.Tj = function(a) {
        a.M(this.b.Tj / 1E3)
    };
    c.prototype.Ki = function(a) {
        a.M(this.b.Ki)
    };
    d.Ta = new c;
    d.bs = function() {
        var c, d, e, k, v, m, t = this.b.ib();
        c = 0;
        for (e = this.Ub.length; c < e; c++)
            if (k = this.Ub[c], !(k.time > this.b.Ed.mb)) {
                t.Lb =
                    k.sf;
                t.Hb = k.Hb;
                t.Sa = 0;
                for (d in k.Gb) k.Gb.hasOwnProperty(d) && (v = this.b.H[parseInt(d, 10)].ca(), m = k.Gb[d], v.na = m.dj, wa(v.k, m.Ad), v = m, v.Ad.length = 0, a.push(v));
                k.sf.$r();
                this.b.Rj(k.ya);
                k.bk = !0
            }
        d = c = 0;
        for (e = this.Ub.length; c < e; c++) k = this.Ub[c], this.Ub[d] = k, k.bk ? (La(k.Gb), k.ya.length = 0, b.push(k)) : d++;
        this.Ub.length = d
    }
})();
(function() {
    Wa = function(e) {
        var c = e[0].prototype,
            d = e[1],
            b = e[3],
            a = e[4],
            l = e[5],
            f = e[6],
            q = e[7];
        e = e[8];
        c.n || (c.n = {});
        c.j || (c.j = {});
        c.Ta || (c.Ta = {});
        var s = c.n,
            v = c.j,
            c = c.Ta;
        b && (s.Qs = function(a, b) {
                return Hb(this.x, a, b)
            }, s.Rs = function(a, b) {
                return Hb(this.y, a, b)
            }, s.Zs = function() {
                var a = this.u;
                this.Ea();
                var b = this.Ka;
                return !(b.right < a.nb || b.bottom < a.ob || b.left > a.lc || b.top > a.kc)
            }, s.$s = function() {
                this.Ea();
                var a = this.Ka,
                    b = this.b.ea;
                return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
            }, s.mt = function(a, b, c) {
                var d =
                    this.ca(),
                    f = d.pc();
                if (!f.length) return !1;
                var e = f[0],
                    l = e,
                    h = Ha(e.x, e.y, b, c),
                    k, q, s;
                k = 1;
                for (q = f.length; k < q; k++)
                    if (e = f[k], s = Ha(e.x, e.y, b, c), 0 === a && s < h || 1 === a && s > h) h = s, l = e;
                d.gh(l);
                return !0
            }, v.Gt = function(a) {
                this.x !== a && (this.x = a, this.F())
            }, v.Ht = function(a) {
                this.y !== a && (this.y = a, this.F())
            }, v.Ct = function(a, b) {
                if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.F()
            }, v.Dt = function(a, b) {
                var c = a.Sq(this);
                if (c) {
                    var d;
                    c.mg ? (d = c.mg(b, !0), c = c.mg(b, !1)) : (d = c.x, c = c.y);
                    if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.F()
                }
            },
            v.gt = function(a) {
                0 !== a && (this.x += Math.cos(this.q) * a, this.y += Math.sin(this.q) * a, this.F())
            }, v.et = function(a, b) {
                0 !== b && (this.x += Math.cos(E(a)) * b, this.y += Math.sin(E(a)) * b, this.F())
            }, c.qm = function(a) {
                a.M(this.x)
            }, c.rm = function(a) {
                a.M(this.y)
            }, c.rf = function(a) {
                a.M(this.b.De(this))
            });
        a && (s.Ps = function(a, b) {
            return Hb(this.width, a, b)
        }, s.Ms = function(a, b) {
            return Hb(this.height, a, b)
        }, v.rp = function(a) {
            this.width !== a && (this.width = a, this.F())
        }, v.At = function(a) {
            this.height !== a && (this.height = a, this.F())
        }, v.Et = function(a,
            b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.F()
        }, c.Lt = function(a) {
            a.M(this.width)
        }, c.Ts = function(a) {
            a.M(this.height)
        }, c.Is = function(a) {
            this.Ea();
            a.M(this.Ka.left)
        }, c.Ks = function(a) {
            this.Ea();
            a.M(this.Ka.top)
        }, c.Js = function(a) {
            this.Ea();
            a.M(this.Ka.right)
        }, c.Hs = function(a) {
            this.Ea();
            a.M(this.Ka.bottom)
        });
        l && (s.Gs = function(a, b) {
            return Ea(this.q, E(b)) <= E(a)
        }, s.Xs = function(a) {
            return Ga(this.q, E(a))
        }, s.Vs = function(a, b) {
            var c = Ca(a),
                d = Ca(b),
                f = L(this.q);
            return Ga(d, c) ? Ga(f, c) && !Ga(f,
                d) : !(!Ga(f, c) && Ga(f, d))
        }, v.wt = function(a) {
            a = E(Aa(a));
            isNaN(a) || this.q === a || (this.q = a, this.F())
        }, v.qt = function(a) {
            0 === a || isNaN(a) || (this.q += E(a), this.q = L(this.q), this.F())
        }, v.st = function(a) {
            0 === a || isNaN(a) || (this.q -= E(a), this.q = L(this.q), this.F())
        }, v.tt = function(a, b) {
            var c = Fa(this.q, E(b), E(a));
            isNaN(c) || this.q === c || (this.q = c, this.F())
        }, v.ut = function(a, b, c) {
            a = Fa(this.q, Math.atan2(c - this.y, b - this.x), E(a));
            isNaN(a) || this.q === a || (this.q = a, this.F())
        }, v.Ft = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.q === c || (this.q = c, this.F())
        }, c.Fs = function(a) {
            a.M(Ba(this.q))
        });
        d || (s.Ns = function(a, b, c) {
            return Hb(this.Va[a], b, c)
        }, s.Ws = function(a) {
            return this.Va[a]
        }, s.nt = function(a, b) {
            var c = this.ca(),
                d = c.pc();
            if (!d.length) return !1;
            var f = d[0],
                e = f,
                l = f.Va[b],
                h, k, q;
            h = 1;
            for (k = d.length; h < k; h++)
                if (f = d[h], q = f.Va[b], 0 === a && q < l || 1 === a && q > l) l = q, e = f;
            c.gh(e);
            return !0
        }, s.lt = function(a) {
            var b, c, d, f, e;
            if (this.b.li().vg) {
                e = this.ca();
                if (e.na)
                    for (e.na = !1, e.k.length = 0, e.ma.length = 0, d = this.k, b = 0, c = d.length; b < c; b++) f =
                        d[b], f.uid === a ? e.ma.push(f) : e.k.push(f);
                else {
                    d = b = 0;
                    for (c = e.k.length; b < c; b++) f = e.k[b], e.k[d] = f, f.uid === a ? e.ma.push(f) : d++;
                    e.k.length = d
                }
                this.vc();
                return !!e.k.length
            }
            f = this.b.og(a);
            if (!f) return !1;
            e = this.ca();
            if (!e.na && -1 === e.k.indexOf(f)) return !1;
            if (this.P)
                for (a = f.type.Da, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return e.gh(f), this.vc(), !0
                } else if (f.type === this) return e.gh(f), this.vc(), !0;
            return !1
        }, s.Bj = x(!0), s.cp = x(!0), v.Bt = function(a, b) {
            var c = this.Va;
            z(c[a]) ? c[a] = z(b) ? b : parseFloat(b) : A(c[a]) && (c[a] =
                A(b) ? b : b.toString())
        }, v.Es = function(a, b) {
            var c = this.Va;
            z(c[a]) ? c[a] = z(b) ? c[a] + b : c[a] + parseFloat(b) : A(c[a]) && (c[a] = A(b) ? c[a] + b : c[a] + b.toString())
        }, v.It = function(a, b) {
            var c = this.Va;
            z(c[a]) && (c[a] = z(b) ? c[a] - b : c[a] - parseFloat(b))
        }, v.xt = function(a, b) {
            this.Va[a] = b ? 1 : 0
        }, v.Jt = function(a) {
            this.Va[a] = 1 - this.Va[a]
        }, v.T = function() {
            this.b.ef(this)
        }, v.Vo || (v.Vo = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.Ii(this, b, !0);
            this.Yc && this.Yc();
            if (this.S)
                for (a = 0, b = this.S.length; a < b; ++a) c = this.S[a], c.Yc &&
                    c.Yc()
        }), c.Ss = function(a) {
            var b = a.Lf.k.length,
                c, d, f;
            c = 0;
            for (d = this.b.Kb.length; c < d; c++) f = this.b.Kb[c], a.Lf.P ? 0 <= f.type.Da.indexOf(a.Lf) && b++ : f.type === a.Lf && b++;
            a.Ba(b)
        }, c.pt = function(a) {
            a.Ba(a.Lf.ca().pc().length)
        }, c.Kt = function(a) {
            a.Ba(this.uid)
        }, c.Us = function(a) {
            a.Ba(this.qg())
        }, c.Qo || (c.Qo = function(a) {
            a.Ic(JSON.stringify(this.b.Bl(this, !0)))
        }));
        f && (s.bt = ba("visible"), v.om = function(a) {
                !a !== !this.visible && (this.visible = a, this.b.qa = !0)
            }, s.Os = function(a, b) {
                return Hb(Ta(100 * this.opacity), a, b)
            }, v.mm =
            function(a) {
                a /= 100;
                0 > a ? a = 0 : 1 < a && (a = 1);
                a !== this.opacity && (this.opacity = a, this.b.qa = !0)
            }, c.Opacity = function(a) {
                a.M(Ta(100 * this.opacity))
            });
        q && (s.Ys = function(a) {
            return a ? this.u === a : !1
        }, s.ot = function(a) {
            var b = this.ca(),
                c = b.pc();
            if (!c.length) return !1;
            var d = c[0],
                f = d,
                e, l;
            e = 1;
            for (l = c.length; e < l; e++)
                if (d = c[e], 0 === a) {
                    if (d.u.index > f.u.index || d.u.index === f.u.index && d.qc() > f.qc()) f = d
                } else if (d.u.index < f.u.index || d.u.index === f.u.index && d.qc() < f.qc()) f = d;
            b.gh(f);
            return !0
        }, v.Wo = function() {
            var a = this.qc();
            a !== this.u.k.length -
                1 && (va(this.u.k, a), this.u.k.push(this), this.b.qa = !0, this.u.mc = !0)
        }, v.ht = function() {
            var a = this.qc();
            0 !== a && (va(this.u.k, a), this.u.k.unshift(this), this.b.qa = !0, this.u.mc = !0)
        }, v.it = function(a) {
            a && a != this.u && (va(this.u.k, this.qc()), this.u.mc = !0, this.u = a, this.df = a.k.length, a.k.push(this), this.b.qa = !0)
        }, v.Nt = function(a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.Mq(this);
                if (d && d.uid !== this.uid) {
                    this.u.index !== d.u.index && (va(this.u.k, this.qc()), this.u.mc = !0, this.u = d.u, this.df = d.u.k.length, d.u.k.push(this));
                    var f = this.qc(),
                        d = d.qc();
                    va(this.u.k, f);
                    f < d && d--;
                    c && d++;
                    d === this.u.k.length ? this.u.k.push(this) : this.u.k.splice(d, 0, this);
                    this.u.mc = !0;
                    this.b.qa = !0
                }
            }
        }, c.dt = function(a) {
            a.Ba(this.u.On)
        }, c.ct = function(a) {
            a.Ic(this.u.name)
        }, c.Mt = function(a) {
            a.Ba(this.qc())
        });
        e && (v.yt = function(a, b) {
            if (this.b.I) {
                var c = this.type.ok(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.Sd[c] !== d && (this.Sd[c] = d, this.Qd(), this.b.qa = !0)
                }
            }
        }, v.zt = function(a, b, c) {
            if (this.b.I) {
                var d = this.type.ok(a);
                0 > d || (a = this.type.Q[d], d = this.Ga[d], b = Math.floor(b), 0 > b || b >= d.length ||
                    (1 === this.b.I.Vq(a.lb, b) && (c /= 100), d[b] !== c && (d[b] = c, a.qb && (this.b.qa = !0))))
            }
        })
    };
    ob = function() {
        this.Pj = this.Lj = !0;
        this.type.Jh = !0;
        this.b.qa = !0;
        var e, c, d = this.Mj;
        e = 0;
        for (c = d.length; e < c; ++e) d[e](this)
    };
    pb = function(e) {
        e && this.Mj.push(e)
    };
    rb = function() {
        if (this.Lj) {
            var e = this.Ka,
                c = this.Db;
            e.set(this.x, this.y, this.x + this.width, this.y + this.height);
            e.offset(-this.Ob * this.width, -this.Pb * this.height);
            this.q ? (e.offset(-this.x, -this.y), c.po(e, this.q), c.offset(this.x, this.y), c.Bm(e)) : c.mh(e);
            e.normalize();
            this.Lj = !1
        }
    };
    var e = new sa(0, 0, 0, 0);
    sb = function() {
        if (this.Pj && this.rd) {
            this.Ea();
            var k = this.type.Uh,
                c = this.Th,
                d = this.Ka;
            e.set(k.Hh(d.left), k.Ih(d.top), k.Hh(d.right), k.Ih(d.bottom));
            c.iq(e) || (c.right < c.left ? k.update(this, null, e) : k.update(this, c, e), c.copy(e), this.Pj = !1)
        }
    };
    qb = function(e, c) {
        return this.Ka.Jb(e, c) && this.Db.Jb(e, c) ? this.la && !this.la.Cf() ? (this.la.of(this.width, this.height, this.q), this.la.Jb(e - this.x, c - this.y)) : !0 : !1
    };
    kb = function() {
        this.type.vj();
        return this.Ge
    };
    tb = function() {
        this.u.ys();
        return this.df
    };
    ub = function() {
        this.ia.length = 0;
        var e, c;
        e = 0;
        for (c = this.Sd.length; e < c; e++) this.Sd[e] && this.ia.push(this.type.Q[e]);
        this.Mo = !!this.ia.length
    };
    lb = function() {
        return "Inst" + this.fo
    };
    Za = function(e) {
        if (e && e.rc && e.type != this) {
            var c, d, b;
            c = 0;
            for (d = e.siblings.length; c < d; c++)
                if (b = e.siblings[c], b.type == this) return b
        }
        e = this.ca().pc();
        return e.length ? e[0] : null
    };
    $a = function(e) {
        var c = this.ca().pc();
        return c.length ? c[e.qg() % c.length] : null
    };
    Ya = function() {
        if (this.Sf && !this.P) {
            var e, c;
            e = 0;
            for (c = this.k.length; e < c; e++) this.k[e].Ge =
                e;
            var d = e,
                b = this.b.Kb;
            e = 0;
            for (c = b.length; e < c; ++e) b[e].type === this && (b[e].Ge = d++);
            this.Sf = !1
        }
    };
    ib = function(e) {
        if (e < this.k.length) return this.k[e];
        e -= this.k.length;
        var c = this.b.Kb,
            d, b;
        d = 0;
        for (b = c.length; d < b; ++d)
            if (c[d].type === this) {
                if (0 === e) return c[d];
                --e
            }
        return null
    };
    ab = function() {
        return this.re[this.ud]
    };
    bb = function() {
        this.ud++;
        this.ud === this.re.length ? this.re.push(new Xa(this)) : this.re[this.ud].na = !0
    };
    cb = function() {
        this.ud++;
        this.ud === this.re.length && this.re.push(new Xa(this));
        var e = this.re[this.ud],
            c = this.re[this.ud - 1];
        c.na ? e.na = !0 : (e.na = !1, wa(e.k, c.k), wa(e.ma, c.ma))
    };
    db = function() {
        this.ud--
    };
    eb = function(e) {
        var c, d, b, a, l, f = 0;
        if (!this.P)
            for (c = 0, d = this.Da.length; c < d; c++)
                for (l = this.Da[c], b = 0, a = l.Na.length; b < a; b++) {
                    if (e === l.Na[b].name) return this.O.wn = f, l.Na[b];
                    f++
                }
        c = 0;
        for (d = this.Na.length; c < d; c++) {
            if (e === this.Na[c].name) return this.O.wn = f, this.Na[c];
            f++
        }
        return null
    };
    fb = function(e) {
        return this.ki(e) ? this.O.wn : -1
    };
    gb = function(e) {
        var c, d;
        c = 0;
        for (d = this.Q.length; c < d; c++)
            if (this.Q[c].name === e) return c;
        return -1
    };
    hb = function() {
        if (this.rc && !this.P) {
            var e, c, d, b, a, l, f;
            this.vj();
            l = this.ca();
            var q = l.na,
                s = (e = this.b.ib()) && e.Lb && e.Lb.Sc;
            e = 0;
            for (c = this.Zb.length; e < c; e++)
                if (a = this.Zb[e], a !== this && (a.vj(), f = a.ca(), f.na = q, !q)) {
                    f.k.length = l.k.length;
                    d = 0;
                    for (b = l.k.length; d < b; d++) f.k[d] = a.Zm(l.k[d].Ge);
                    if (s)
                        for (f.ma.length = l.ma.length, d = 0, b = l.ma.length; d < b; d++) f.ma[d] = a.Zm(l.ma[d].Ge)
                }
        }
    };
    jb = function() {
        return "Type" + this.Y
    };
    Hb = function(e, c, d) {
        if ("undefined" === typeof e || "undefined" === typeof d) return !1;
        switch (c) {
            case 0:
                return e ===
                    d;
            case 1:
                return e !== d;
            case 2:
                return e < d;
            case 3:
                return e <= d;
            case 4:
                return e > d;
            case 5:
                return e >= d;
            default:
                return !1
        }
    }
})();
var Qb = {
    hardlight: {
        src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform lowp sampler2D samplerBack;\nuniform mediump vec2 destStart;\nuniform mediump vec2 destEnd;\nvoid main(void)\n{\nlowp vec4 front = texture2D(samplerFront, vTex);\nlowp vec4 back = texture2D(samplerBack, mix(destStart, destEnd, vTex));\nif (front.r * 0.299 + front.g * 0.587 + front.b * 0.114 <= 0.5)\n{\nfront *= back * 2.0;\n}\nelse\n{\nfront.rgb = 1.0 - ((1.0 - (2.0 * front.rgb - 1.0)) * (1.0 - back.rgb * front.a));\n}\ngl_FragColor = front;\n}",
        bi: 0,
        ci: 0,
        Vj: !0,
        Ij: !1,
        R: []
    }
};

function Sb(e) {
    this.b = e
}
(function() {
    function e() {}

    function k() {}
    var c = Sb.prototype;
    c.ba = function(b) {
        this.Aa = b;
        this.b = b.b
    };
    c.ba.prototype.N = r();
    c.U = function(b) {
        this.type = b;
        this.b = b.b
    };
    var d = c.U.prototype;
    d.N = function() {
        this.b.da ? y("[Construct 2] Button plugin not supported on this platform - the object will not be created") : (this.Af = 1 === this.D[0], this.Bc = document.createElement("input"), this.B = this.Af ? document.createElement("label") : this.Bc, this.Cg = null, this.Bc.type = this.Af ? "checkbox" : "button", this.Bc.id = this.D[6], jQuery(this.B).appendTo(this.b.pf ?
                this.b.pf : "body"), this.Af ? (jQuery(this.Bc).appendTo(this.B), this.Cg = document.createTextNode(this.D[1]), jQuery(this.B).append(this.Cg), this.Bc.checked = 0 !== this.D[7], jQuery(this.B).css("font-family", "sans-serif"), jQuery(this.B).css("display", "inline-block"), jQuery(this.B).css("color", "black")) : this.Bc.value = this.D[1], this.B.title = this.D[2], this.Bc.disabled = 0 === this.D[4], this.Kj = 0 !== this.D[5], this.Mb = !1, 0 === this.D[3] && (jQuery(this.B).hide(), this.visible = !1, this.Mb = !0), this.Bc.onclick = function(b) {
                return function(a) {
                    a.stopPropagation();
                    b.b.za = !0;
                    b.b.trigger(Sb.prototype.n.Aj, b);
                    b.b.za = !1
                }
            }(this), this.B.addEventListener("touchstart", function(b) {
                b.stopPropagation()
            }, !1), this.B.addEventListener("touchmove", function(b) {
                b.stopPropagation()
            }, !1), this.B.addEventListener("touchend", function(b) {
                b.stopPropagation()
            }, !1), jQuery(this.B).mousedown(function(b) {
                b.stopPropagation()
            }), jQuery(this.B).mouseup(function(b) {
                b.stopPropagation()
            }), jQuery(this.B).keydown(function(b) {
                b.stopPropagation()
            }), jQuery(this.B).keyup(function(b) {
                b.stopPropagation()
            }),
            this.Jg = this.Kg = this.Dg = this.Hg = this.Ig = this.Fg = 0, this.yh(!0), this.b.wh(this))
    };
    d.Qa = function() {
        var b = {
            tooltip: this.B.title,
            disabled: !!this.Bc.disabled
        };
        this.Af ? (b.checked = !!this.Bc.checked, b.text = this.Cg.nodeValue) : b.text = this.B.value;
        return b
    };
    d.ab = function(b) {
        this.B.title = b.tooltip;
        this.Bc.disabled = b.disabled;
        this.Af ? (this.Bc.checked = b.checked, this.Cg.nodeValue = b.text) : this.B.value = b.text
    };
    d.Jd = function() {
        this.b.da || (jQuery(this.B).remove(), this.B = null)
    };
    d.zb = function() {
        this.yh()
    };
    d.yh = function(b) {
        if (!this.b.da) {
            var a =
                this.u.ja(this.x, this.y, !0),
                c = this.u.ja(this.x, this.y, !1),
                d = this.u.ja(this.x + this.width, this.y + this.height, !0),
                e = this.u.ja(this.x + this.width, this.y + this.height, !1);
            if (!this.visible || !this.u.visible || 0 >= d || 0 >= e || a >= this.b.width || c >= this.b.height) this.Mb || jQuery(this.B).hide(), this.Mb = !0;
            else {
                1 > a && (a = 1);
                1 > c && (c = 1);
                d >= this.b.width && (d = this.b.width - 1);
                e >= this.b.height && (e = this.b.height - 1);
                var k = window.innerWidth,
                    v = window.innerHeight;
                b || this.Fg !== a || this.Ig !== c || this.Hg !== d || this.Dg !== e || this.Kg !== k ||
                    this.Jg !== v ? (this.Fg = a, this.Ig = c, this.Hg = d, this.Dg = e, this.Kg = k, this.Jg = v, this.Mb && (jQuery(this.B).show(), this.Mb = !1), b = Math.round(a) + jQuery(this.b.canvas).offset().left, k = Math.round(c) + jQuery(this.b.canvas).offset().top, jQuery(this.B).css("position", "absolute"), jQuery(this.B).offset({
                        left: b,
                        top: k
                    }), jQuery(this.B).width(Math.round(d - a)), jQuery(this.B).height(Math.round(e - c)), this.Kj && jQuery(this.B).css("font-size", this.u.Eb(!0) / this.b.devicePixelRatio - 0.2 + "em")) : this.Mb && (jQuery(this.B).show(), this.Mb = !1)
            }
        }
    };
    d.zc = r();
    d.$b = r();
    e.prototype.Aj = x(!0);
    c.n = new e;
    k.prototype.ta = function(b) {
        this.b.da || (this.Af ? this.Cg.nodeValue = b : this.B.value = b)
    };
    k.prototype.om = function(b) {
        this.b.da || (this.visible = 0 !== b)
    };
    c.j = new k;
    c.Ta = new(r())
})();

function S(e) {
    this.b = e
}
(function() {
    function e() {}
    var k = S.prototype;
    k.ba = function(b) {
        this.Aa = b;
        this.b = b.b
    };
    k.ba.prototype.N = r();
    k.U = function(b) {
        this.type = b;
        this.b = b.b;
        this.Gk = Array(256);
        this.xj = Array(256);
        this.ve = 0
    };
    var c = k.U.prototype;
    c.N = function() {
        var b = this;
        this.b.da || (jQuery(document).keydown(function(a) {
            b.ah(a)
        }), jQuery(document).keyup(function(a) {
            b.bh(a)
        }))
    };
    var d = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    c.ah = function(b) {
        var a = !1;
        window != window.top && -1 < d.indexOf(b.which) && (b.preventDefault(), a = !0, b.stopPropagation());
        if (this.Gk[b.which]) this.xj[b.which] &&
            !a && b.preventDefault();
        else {
            this.Gk[b.which] = !0;
            this.ve = b.which;
            this.b.za = !0;
            this.b.trigger(S.prototype.n.Zo, this);
            var c = this.b.trigger(S.prototype.n.kf, this),
                f = this.b.trigger(S.prototype.n.hp, this);
            this.b.za = !1;
            if (c || f) this.xj[b.which] = !0, a || b.preventDefault()
        }
    };
    c.bh = function(b) {
        this.Gk[b.which] = !1;
        this.ve = b.which;
        this.b.za = !0;
        this.b.trigger(S.prototype.n.$o, this);
        var a = this.b.trigger(S.prototype.n.Zf, this),
            c = this.b.trigger(S.prototype.n.ip, this);
        this.b.za = !1;
        if (a || c || this.xj[b.which]) this.xj[b.which] = !0, b.preventDefault()
    };
    c.Qa = function() {
        return {
            triggerKey: this.ve
        }
    };
    c.ab = function(b) {
        this.ve = b.triggerKey
    };
    e.prototype.kf = function(b) {
        return b === this.ve
    };
    e.prototype.Zo = x(!0);
    e.prototype.$o = x(!0);
    e.prototype.Zf = function(b) {
        return b === this.ve
    };
    e.prototype.hp = function(b) {
        return b === this.ve
    };
    e.prototype.ip = function(b) {
        return b === this.ve
    };
    k.n = new e;
    k.j = new(r());
    k.Ta = new(r())
})();

function T(e) {
    this.b = e
}
(function() {
    function e() {}

    function k() {}
    var c = T.prototype;
    c.ba = function(a) {
        this.Aa = a;
        this.b = a.b
    };
    c.ba.prototype.N = r();
    c.U = function(a) {
        this.type = a;
        this.b = a.b;
        this.Nj = Array(4);
        this.Ao = this.tj = this.Tf = this.Id = this.Hd = 0;
        this.qk = !1
    };
    var d = c.U.prototype;
    d.N = function() {
        var a = this;
        if (!this.b.da) {
            jQuery(document).mousemove(function(b) {
                a.dl(b)
            });
            jQuery(document).mousedown(function(b) {
                a.cl(b)
            });
            jQuery(document).mouseup(function(b) {
                a.el(b)
            });
            jQuery(document).dblclick(function(b) {
                a.Qr(b)
            });
            var b = function(b) {
                a.Rr(b)
            };
            document.addEventListener("mousewheel", b, !1);
            document.addEventListener("DOMMouseScroll", b, !1)
        }
    };
    var b = {
        left: 0,
        top: 0
    };
    d.dl = function(a) {
        var c = this.b.da ? b : jQuery(this.b.canvas).offset();
        this.Hd = a.pageX - c.left;
        this.Id = a.pageY - c.top
    };
    d.Kn = function() {
        return 0 < this.b.Nb ? !0 : 0 <= this.Hd && 0 <= this.Id && this.Hd < this.b.width && this.Id < this.b.height
    };
    d.cl = function(a) {
        this.Kn() && (this.b.yf && !this.b.Dc && a.preventDefault(), this.Nj[a.which] = !0, this.b.za = !0, this.b.trigger(T.prototype.n.em, this), this.Tf = a.which - 1, this.tj =
            0, this.b.trigger(T.prototype.n.fm, this), this.b.trigger(T.prototype.n.Vb, this), this.b.za = !1)
    };
    d.el = function(a) {
        this.Nj[a.which] && (this.b.yf && !this.b.Dc && a.preventDefault(), this.b.yf = !0, this.Nj[a.which] = !1, this.b.za = !0, this.Tf = a.which - 1, this.b.trigger(T.prototype.n.np, this), this.b.za = !1)
    };
    d.Qr = function(a) {
        this.Kn() && (a.preventDefault(), this.b.za = !0, this.Tf = a.which - 1, this.tj = 1, this.b.trigger(T.prototype.n.fm, this), this.b.trigger(T.prototype.n.Vb, this), this.b.za = !1)
    };
    d.Rr = function(a) {
        this.Ao = 0 > (a.wheelDelta ?
            a.wheelDelta : a.detail ? -a.detail : 0) ? 0 : 1;
        this.qk = !1;
        this.b.za = !0;
        this.b.trigger(T.prototype.n.qp, this);
        this.b.za = !1;
        this.qk && a.preventDefault()
    };
    e.prototype.fm = function(a, b) {
        return a === this.Tf && b === this.tj
    };
    e.prototype.em = x(!0);
    e.prototype.np = function(a) {
        return a === this.Tf
    };
    e.prototype.Uo = function(a) {
        var b = this.b.li();
        return Ia(this.b.Ml(a, this.Hd, this.Id, b.vg), b.vg)
    };
    e.prototype.Vb = function(a, b, c) {
        return a !== this.Tf || b !== this.tj ? !1 : this.b.Ml(c, this.Hd, this.Id, !1)
    };
    e.prototype.qp = function(a) {
        this.qk = !0;
        return a === this.Ao
    };
    c.n = new e;
    c.j = new(r());
    k.prototype.qm = function(a, b) {
        var c, d, e, k, m;
        ga(b) ? (c = this.b.yd(0), d = c.scale, e = c.Cb, k = c.Sb, m = c.q, c.scale = this.b.ea.scale, c.Cb = 1, c.Sb = 1, c.q = this.b.ea.q, a.M(c.Ra(this.Hd, this.Id, !0)), c.scale = d, c.Cb = e, c.Sb = k, c.q = m) : (c = z(b) ? this.b.yd(b) : this.b.ng(b)) ? a.M(c.Ra(this.Hd, this.Id, !0)) : a.M(0)
    };
    k.prototype.rm = function(a, b) {
        var c, d, e, k, m;
        ga(b) ? (c = this.b.yd(0), d = c.scale, e = c.Cb, k = c.Tb, m = c.q, c.scale = this.b.ea.scale, c.Cb = 1, c.Tb = 1, c.q = this.b.ea.q, a.M(c.Ra(this.Hd, this.Id, !1)), c.scale = d, c.Cb = e, c.Tb = k, c.q = m) : (c = z(b) ? this.b.yd(b) : this.b.ng(b)) ? a.M(c.Ra(this.Hd, this.Id, !1)) : a.M(0)
    };
    c.Ta = new k
})();

function R(e) {
    this.b = e
}
(function() {
    function e() {
        if (0 === this.Zj.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Rf ? b.drawImage(this.V, this.Mf, this.Nf, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.V, 0, 0, this.width, this.height);
            this.Zj = a.toDataURL("image/png")
        }
        return this.Zj
    }

    function k() {}

    function c(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        t.push(a)
    }

    function d(a, b) {
        return a < b ? "" + a + "," + b : "" + b + "," + a
    }

    function b(a, b, c, f) {
        b = b.uid;
        c = c.uid;
        var e = d(b, c);
        if (a.hasOwnProperty(e)) a[e][2] =
            f;
        else {
            var g = t.length ? t.pop() : [0, 0, 0];
            g[0] = b;
            g[1] = c;
            g[2] = f;
            a[e] = g
        }
    }

    function a(a, b, f) {
        b = d(b.uid, f.uid);
        a.hasOwnProperty(b) && (c(a[b]), delete a[b])
    }

    function l(a, b, c) {
        b = d(b.uid, c.uid);
        if (a.hasOwnProperty(b)) return w = a[b][2], !0;
        w = -2;
        return !1
    }

    function f() {}
    var q = R.prototype;
    q.ba = function(a) {
        this.Aa = a;
        this.b = a.b
    };
    var s = q.ba.prototype;
    s.N = function() {
        if (!this.P) {
            var a, b, c, d, f, g, l, k, n;
            this.Nc = [];
            this.si = !1;
            a = 0;
            for (b = this.Yb.length; a < b; a++) {
                f = this.Yb[a];
                l = {};
                l.name = f[0];
                l.speed = f[1];
                l.loop = f[2];
                l.wl = f[3];
                l.bj =
                    f[4];
                l.Zn = f[5];
                l.Y = f[6];
                l.frames = [];
                c = 0;
                for (d = f[7].length; c < d; c++) g = f[7][c], k = {}, k.Ol = g[0], k.Pl = g[1], k.Mf = g[2], k.Nf = g[3], k.width = g[4], k.height = g[5], k.duration = g[6], k.Ob = g[7], k.Pb = g[8], k.tk = g[9], k.Ui = g[10], k.$n = g[11], k.Rf = 0 !== k.width, k.Zj = "", k.Tt = e, n = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, k.Il = n, k.Ca = null, (n = this.b.Hq(g[0])) ? k.V = n : (k.V = new Image, k.V.idtkLoadDisposed = !0, k.V.src = g[0], k.V.Op = g[0], k.V.Im = g[1], k.V.Ip = null, this.b.Oo(k.V)), l.frames.push(k), this.Nc.push(k);
                this.Yb[a] = l
            }
        }
    };
    s.xs = function() {
        var a, b,
            c;
        a = 0;
        for (b = this.k.length; a < b; a++) c = this.k[a], c.Xh = c.xc.Ca
    };
    s.Qi = function() {
        if (!this.P) {
            var a, b, c;
            a = 0;
            for (b = this.Nc.length; a < b; ++a) c = this.Nc[a], c.V.Ip = null, c.Ca = null
        }
    };
    s.fl = function() {
        if (!this.P && this.k.length) {
            var a, b, c;
            a = 0;
            for (b = this.Nc.length; a < b; ++a) c = this.Nc[a], c.Ca = this.b.I.Ji(c.V, !1, this.b.ka, c.$n);
            this.xs()
        }
    };
    s.Rk = function() {
        if (!this.P && !this.si && this.b.I) {
            var a, b, c;
            a = 0;
            for (b = this.Nc.length; a < b; ++a) c = this.Nc[a], c.Ca = this.b.I.Ji(c.V, !1, this.b.ka, c.$n);
            this.si = !0
        }
    };
    s.Wl = function() {
        if (!this.P &&
            !this.k.length && this.si) {
            var a, b, c;
            a = 0;
            for (b = this.Nc.length; a < b; ++a) c = this.Nc[a], this.b.I.deleteTexture(c.Ca), c.Ca = null;
            this.si = !1
        }
    };
    var v = [];
    s.nl = function(a) {
        var b, c, d;
        b = v.length = 0;
        for (c = this.Nc.length; b < c; ++b) d = this.Nc[b].V, -1 === v.indexOf(d) && (a.drawImage(d, 0, 0), v.push(d))
    };
    q.U = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.Yb[0].frames[0].Ui;
        this.hc ? this.la.nh(a) : this.la = new Pa(a)
    };
    var m = q.U.prototype;
    m.N = function() {
        this.visible = 0 === this.D[0];
        this.uk = this.Ck = !1;
        this.rd = 0 !== this.D[3];
        1 === this.type.Yb.length &&
            1 === this.type.Yb[0].frames.length || 0 === this.type.Yb[0].speed || (this.b.wh(this), this.Ck = !0);
        this.Fa = this.Vm(this.D[1]) || this.type.Yb[0];
        this.K = this.D[2];
        0 > this.K && (this.K = 0);
        this.K >= this.Fa.frames.length && (this.K = this.Fa.frames.length - 1);
        var a = this.Fa.frames[this.K];
        this.la.nh(a.Ui);
        this.Ob = a.Ob;
        this.Pb = a.Pb;
        this.fg = this.Fa.speed;
        this.hc ? this.Zc.reset() : this.Zc = new Na;
        this.xd = this.Zc.mb;
        this.Td = !0;
        this.od = 0;
        this.ye = !0;
        this.Sh = this.ym = "";
        this.Fm = 0;
        this.Qj = -1;
        this.type.Rk();
        var b, c, d, f, e, g, l, a = 0;
        for (b =
            this.type.Yb.length; a < b; a++)
            for (f = this.type.Yb[a], c = 0, d = f.frames.length; c < d; c++) e = f.frames[c], 0 === e.width && (e.width = e.V.width, e.height = e.V.height), e.Rf && (l = e.V, g = e.Il, g.left = e.Mf / l.width, g.top = e.Nf / l.height, g.right = (e.Mf + e.width) / l.width, g.bottom = (e.Nf + e.height) / l.height, 0 === e.Mf && 0 === e.Nf && e.width === l.width && e.height === l.height && (e.Rf = !1));
        this.xc = this.Fa.frames[this.K];
        this.Xh = this.xc.Ca
    };
    m.Qa = function() {
        var a = {
            a: this.Fa.Y,
            f: this.K,
            cas: this.fg,
            fs: this.xd,
            ar: this.od,
            at: this.Zc.mb
        };
        this.Td || (a.ap =
            this.Td);
        this.ye || (a.af = this.ye);
        return a
    };
    m.ab = function(a) {
        var b = this.Jq(a.a);
        b && (this.Fa = b);
        this.K = a.f;
        0 > this.K && (this.K = 0);
        this.K >= this.Fa.frames.length && (this.K = this.Fa.frames.length - 1);
        this.fg = a.cas;
        this.xd = a.fs;
        this.od = a.ar;
        this.Zc.reset();
        this.Zc.mb = a.at;
        this.Td = a.hasOwnProperty("ap") ? a.ap : !0;
        this.ye = a.hasOwnProperty("af") ? a.af : !0;
        this.xc = this.Fa.frames[this.K];
        this.Xh = this.xc.Ca;
        this.la.nh(this.xc.Ui);
        this.Ob = this.xc.Ob;
        this.Pb = this.xc.Pb
    };
    m.Jj = function(a) {
        this.K = a ? 0 : this.Fa.frames.length -
            1;
        this.Td = !1;
        this.ym = this.Fa.name;
        this.uk = !0;
        this.b.trigger(R.prototype.n.Yo, this);
        this.b.trigger(R.prototype.n.Xo, this);
        this.uk = !1;
        this.od = 0
    };
    m.Wt = function() {
        return this.Zc.mb
    };
    m.zb = function() {
        this.Zc.add(this.b.De(this));
        this.Sh.length && this.Mm();
        0 <= this.Qj && this.Sp();
        var a = this.Zc.mb,
            b = this.Fa,
            c = b.frames[this.K],
            d = c.duration / this.fg;
        this.Td && a >= this.xd + d && (this.ye ? this.K++ : this.K--, this.xd += d, this.K >= b.frames.length && (b.Zn ? (this.ye = !1, this.K = b.frames.length - 2) : b.loop ? this.K = b.bj : (this.od++, this.od >=
            b.wl ? this.Jj(!1) : this.K = b.bj)), 0 > this.K && (b.Zn ? (this.K = 1, this.ye = !0, b.loop || (this.od++, this.od >= b.wl && this.Jj(!0))) : b.loop ? this.K = b.bj : (this.od++, this.od >= b.wl ? this.Jj(!0) : this.K = b.bj)), 0 > this.K ? this.K = 0 : this.K >= b.frames.length && (this.K = b.frames.length - 1), a > this.xd + b.frames[this.K].duration / this.fg && (this.xd = a), a = b.frames[this.K], this.jf(c, a), this.b.qa = !0)
    };
    m.Vm = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Yb.length; b < c; b++)
            if (d = this.type.Yb[b], Ua(d.name, a)) return d;
        return null
    };
    m.Jq = function(a) {
        var b,
            c, d;
        b = 0;
        for (c = this.type.Yb.length; b < c; b++)
            if (d = this.type.Yb[b], d.Y === a) return d;
        return null
    };
    m.Mm = function() {
        var a = this.Fa.frames[this.K],
            b = this.Vm(this.Sh);
        this.Sh = "";
        !b || Ua(b.name, this.Fa.name) && this.Td || (this.Fa = b, this.fg = b.speed, 0 > this.K && (this.K = 0), this.K >= this.Fa.frames.length && (this.K = this.Fa.frames.length - 1), 1 === this.Fm && (this.K = 0), this.Td = !0, this.xd = this.Zc.mb, this.ye = !0, this.jf(a, this.Fa.frames[this.K]), this.b.qa = !0)
    };
    m.Sp = function() {
        var a = this.Fa.frames[this.K],
            b = this.K;
        this.K = D(this.Qj);
        0 > this.K && (this.K = 0);
        this.K >= this.Fa.frames.length && (this.K = this.Fa.frames.length - 1);
        b !== this.K && (this.jf(a, this.Fa.frames[this.K]), this.xd = this.Zc.mb, this.b.qa = !0);
        this.Qj = -1
    };
    m.jf = function(a, b) {
        var c = a.width,
            d = a.height,
            f = b.width,
            e = b.height;
        c != f && (this.width *= f / c);
        d != e && (this.height *= e / d);
        this.Ob = b.Ob;
        this.Pb = b.Pb;
        this.la.nh(b.Ui);
        this.F();
        this.xc = b;
        this.Xh = b.Ca;
        c = 0;
        for (d = this.S.length; c < d; c++) f = this.S[c], f.Tn && f.Tn(a, b);
        this.b.trigger(R.prototype.n.jf, this)
    };
    m.zc = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.xc,
            c = b.Rf,
            d = b.V,
            f = this.x,
            e = this.y,
            g = this.width,
            l = this.height;
        if (0 === this.q && 0 <= g && 0 <= l) f -= this.Ob * g, e -= this.Pb * l, this.b.dd && (f = f + 0.5 | 0, e = e + 0.5 | 0), c ? a.drawImage(d, b.Mf, b.Nf, b.width, b.height, f, e, g, l) : a.drawImage(d, f, e, g, l);
        else {
            this.b.dd && (f = f + 0.5 | 0, e = e + 0.5 | 0);
            a.save();
            var k = 0 < g ? 1 : -1,
                n = 0 < l ? 1 : -1;
            a.translate(f, e);
            1 === k && 1 === n || a.scale(k, n);
            a.rotate(this.q * k * n);
            f = 0 - this.Ob * la(g);
            e = 0 - this.Pb * la(l);
            c ? a.drawImage(d, b.Mf, b.Nf, b.width, b.height, f, e, la(g), la(l)) : a.drawImage(d, f, e, la(g), la(l));
            a.restore()
        }
    };
    m.$b = function(a) {
        a.ic(this.Xh);
        a.We(this.opacity);
        var b = this.xc,
            c = this.Db;
        if (this.b.dd) {
            var d = (this.x + 0.5 | 0) - this.x,
                f = (this.y + 0.5 | 0) - this.y;
            b.Rf ? a.ed(c.Ha + d, c.Ia + f, c.Ab + d, c.Bb + f, c.tb + d, c.ub + f, c.rb + d, c.sb + f, b.Il) : a.Zi(c.Ha + d, c.Ia + f, c.Ab + d, c.Bb + f, c.tb + d, c.ub + f, c.rb + d, c.sb + f)
        } else b.Rf ? a.ed(c.Ha, c.Ia, c.Ab, c.Bb, c.tb, c.ub, c.rb, c.sb, b.Il) : a.Zi(c.Ha, c.Ia, c.Ab, c.Bb, c.tb, c.ub, c.rb, c.sb)
    };
    m.Oq = function(a) {
        var b = this.xc,
            c, d;
        c = 0;
        for (d = b.tk.length; c < d; c++)
            if (Ua(a, b.tk[c][0])) return c;
        return -1
    };
    m.mg = function(a,
        b) {
        var c = this.xc,
            d = c.tk,
            f;
        f = A(a) ? this.Oq(a) : a - 1;
        f = D(f);
        if (0 > f || f >= d.length) return b ? this.x : this.y;
        var e = (d[f][1] - c.Ob) * this.width,
            d = d[f][2],
            d = (d - c.Pb) * this.height,
            c = Math.cos(this.q);
        f = Math.sin(this.q);
        var g = e * c - d * f,
            d = d * c + e * f,
            e = g + this.x,
            d = d + this.y;
        return b ? e : d
    };
    var t = [],
        w = -2,
        p = [];
    k.prototype.aa = function(d) {
        if (!d) return !1;
        var f = this.b,
            e = f.li(),
            g = e.type;
        e.O.Sj || (e.O.Sj = {}, f.Ej(function(a) {
            return function(b) {
                b = b.uid;
                var d, f;
                for (d in a) a.hasOwnProperty(d) && (f = a[d], f[0] === b || f[1] === b) && (c(a[d]), delete a[d])
            }
        }(e.O.Sj)));
        var e = e.O.Sj,
            k = g.ca(),
            n = d.ca(),
            k = k.pc(),
            m, q, s, v, t, I, F, W = this.b.Lc,
            C = W - 1,
            X = f.ib().Lb;
        for (q = 0; q < k.length; q++) {
            s = k[q];
            n.na ? (s.Ea(), this.b.Wm(s.u, d, s.Ka, p), m = p) : m = n.pc();
            for (v = 0; v < m.length; v++) t = m[v], f.jc(s, t) || f.Mp(s, t) ? (I = l(e, s, t), I = !I || w < C, b(e, s, t, W), I && (f.Xi(X.ya), I = g.ca(), F = d.ca(), I.na = !1, F.na = !1, g === d ? (I.k.length = 2, I.k[0] = s, I.k[1] = t, g.vc()) : (I.k.length = 1, F.k.length = 1, I.k[0] = s, F.k[0] = t, g.vc(), d.vc()), X.as(), f.Se(X.ya))) : a(e, s, t);
            p.length = 0
        }
        return !1
    };
    var n = new fa,
        g = !1;
    s.finish = function(a) {
        if (g) {
            if (a) {
                var b =
                    this.b.ib().Lb.Sc;
                a = null.ca();
                var c = n.cf(),
                    d, f;
                if (a.na) {
                    a.na = !1;
                    a.k.length = c.length;
                    d = 0;
                    for (f = c.length; d < f; d++) a.k[d] = c[d];
                    if (b)
                        for (d = a.ma.length = 0, f = null.k.length; d < f; d++) c = null.k[d], n.contains(c) || a.ma.push(c)
                } else if (b)
                    for (b = a.k.length, a.k.length = b + c.length, d = 0, f = c.length; d < f; d++) a.k[b + d] = c[d], ya(a.ma, c[d]);
                else wa(a.k, c);
                null.vc()
            }
            n.clear();
            g = !1
        }
    };
    k.prototype.Xo = function(a) {
        return Ua(this.ym, a)
    };
    k.prototype.Yo = x(!0);
    k.prototype.jf = x(!0);
    q.n = new k;
    f.prototype.Fh = function(a, b, c) {
        if (a && b && (b = this.b.Jm(a,
                b, this.mg(c, !0), this.mg(c, !1)))) {
            "undefined" !== typeof b.q && (b.q = this.q, b.F());
            this.b.Qc++;
            var d, f, e;
            this.b.trigger(Object.getPrototypeOf(a.Aa).n.Bj, b);
            if (b.rc)
                for (d = 0, f = b.siblings.length; d < f; d++) e = b.siblings[d], this.b.trigger(Object.getPrototypeOf(e.type.Aa).n.Bj, e);
            this.b.Qc--;
            d = this.b.Lq();
            c = !1;
            if (ga(d.O.pm) || d.O.pm < this.b.tf) c = !0, d.O.pm = this.b.tf;
            if (a != this.type && (a = a.ca(), a.na = !1, c ? (a.k.length = 1, a.k[0] = b) : a.k.push(b), b.rc))
                for (d = 0, f = b.siblings.length; d < f; d++) e = b.siblings[d], a = e.type.ca(), a.na = !1, c ? (a.k.length = 1, a.k[0] = e) : a.k.push(e)
        }
    };
    f.prototype.sp = function() {
        this.Td = !1
    };
    f.prototype.Xb = function(a, b) {
        this.Sh = a;
        this.Fm = b;
        this.Ck || (this.b.wh(this), this.Ck = !0);
        this.uk || this.Mm()
    };
    f.prototype.Eh = function(a) {
        a = la(this.width) * (0 === a ? -1 : 1);
        this.width !== a && (this.width = a, this.F())
    };
    q.j = new f;
    q.Ta = new(r())
})();

function U(e) {
    this.b = e
}
(function() {
    function e() {
        return l.length ? l.pop() : {}
    }

    function k(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) l.push(a[b]);
        a.length = 0
    }

    function c() {}
    var d = U.prototype;
    d.N = function() {
        d.j.rp = function(a) {
            this.width !== a && (this.width = a, this.Ye = !0, this.F())
        }
    };
    d.ba = function(a) {
        this.Aa = a;
        this.b = a.b
    };
    var b = d.ba.prototype;
    b.N = r();
    b.Qi = function() {
        if (!this.P) {
            var a, b, c;
            a = 0;
            for (b = this.k.length; a < b; a++) c = this.k[a], c.cd = null, c.Re = null, c.gc = null
        }
    };
    d.U = function(a) {
        this.type = a;
        this.b = a.b;
        this.hc ? this.he.length = 0 : this.he = [];
        this.Ye = !0
    };
    b = d.U.prototype;
    b.N = function() {
        this.text = this.D[0];
        this.visible = 0 === this.D[1];
        this.font = this.D[2];
        this.color = this.D[3];
        this.ri = this.D[4];
        this.yj = this.D[5];
        this.dm = 0 === this.D[7];
        this.Mk = this.Ei = this.width;
        this.Ci = this.height;
        this.Ok = this.D[8];
        this.hi = this.uf = "";
        this.xo = this.yo = this.ih = 0;
        this.Sr();
        this.gc = this.Re = this.cd = null;
        this.Mn = !1;
        this.Og = this.b.Lc;
        this.hc ? this.me.set(0, 0, 1, 1) : this.me = new sa(0, 0, 1, 1);
        this.b.I && this.b.wh(this)
    };
    b.Sr = function() {
        var a = this.font.split(" "),
            b;
        for (b = 0; b <
            a.length; b++)
            if ("pt" === a[b].substr(a[b].length - 2, 2)) {
                this.ih = parseInt(a[b].substr(0, a[b].length - 2));
                this.rl = Math.ceil(96 * (this.ih / 72)) + 4;
                0 < b && (this.hi = a[b - 1]);
                this.uf = a[b + 1];
                for (b += 2; b < a.length; b++) this.uf += " " + a[b];
                break
            }
    };
    b.Qa = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.ri,
            va: this.yj,
            wr: this.dm,
            lho: this.Ok,
            fn: this.uf,
            fs: this.hi,
            ps: this.ih,
            pxh: this.rl,
            tw: this.yo,
            th: this.xo,
            lrt: this.Og
        }
    };
    b.ab = function(a) {
        this.text = a.t;
        this.font = a.f;
        this.color = a.c;
        this.ri = a.ha;
        this.yj = a.va;
        this.dm =
            a.wr;
        this.Ok = a.lho;
        this.uf = a.fn;
        this.hi = a.fs;
        this.ih = a.ps;
        this.rl = a.pxh;
        this.yo = a.tw;
        this.xo = a.th;
        this.Og = a.lrt;
        this.Ye = !0;
        this.Mk = this.Ei = this.width;
        this.Ci = this.height
    };
    b.zb = function() {
        if (this.b.I && this.gc && 300 <= this.b.Lc - this.Og) {
            var a = this.u;
            this.Ea();
            var b = this.Ka;
            if (b.right < a.nb || b.bottom < a.ob || b.left > a.lc || b.top > a.kc) this.b.I.deleteTexture(this.gc), this.cd = this.Re = this.gc = null
        }
    };
    b.Jd = function() {
        this.cd = this.Re = null;
        this.b.I && this.gc && this.b.I.deleteTexture(this.gc);
        this.gc = null
    };
    b.fu = function() {
        this.font =
            this.hi + " " + this.ih.toString() + "pt " + this.uf;
        this.Ye = !0;
        this.b.qa = !0
    };
    b.zc = function(a, b) {
        a.font = this.font;
        a.textBaseline = "top";
        a.fillStyle = this.color;
        a.globalAlpha = b ? 1 : this.opacity;
        var c = 1;
        b && (c = this.u.Eb(), a.save(), a.scale(c, c));
        if (this.Ye || this.width !== this.Mk) this.type.Aa.vp(this.text, this.he, a, this.width, this.dm), this.Ye = !1, this.Mk = this.width;
        this.Ea();
        var c = b ? 0 : this.Db.Ha,
            d = b ? 0 : this.Db.Ia;
        this.b.dd && (c = c + 0.5 | 0, d = d + 0.5 | 0);
        0 === this.q || b || (a.save(), a.translate(c, d), a.rotate(this.q), d = c = 0);
        var e =
            d + this.height,
            l = this.rl,
            l = l + this.Ok,
            k, p;
        1 === this.yj ? d += Math.max(this.height / 2 - this.he.length * l / 2, 0) : 2 === this.yj && (d += Math.max(this.height - this.he.length * l - 2, 0));
        for (p = 0; p < this.he.length && !(k = c, 1 === this.ri ? k = c + (this.width - this.he[p].width) / 2 : 2 === this.ri && (k = c + (this.width - this.he[p].width)), a.fillText(this.he[p].text, k, d), d += l, d >= e - l); p++);
        (0 !== this.q || b) && a.restore();
        this.Og = this.b.Lc
    };
    b.$b = function(a) {
        if (!(1 > this.width || 1 > this.height)) {
            var b = this.Ye || this.Mn;
            this.Mn = !1;
            var c = this.u.Eb(),
                d = this.u.oc(),
                e = this.me,
                l = c * this.width,
                k = c * this.height,
                p = Math.ceil(l),
                n = Math.ceil(k),
                g = this.b.X / 2,
                u = this.b.W / 2;
            this.Re || (this.cd = document.createElement("canvas"), this.cd.width = p, this.cd.height = n, this.Ei = p, this.Ci = n, b = !0, this.Re = this.cd.getContext("2d"));
            if (p !== this.Ei || n !== this.Ci) this.cd.width = p, this.cd.height = n, this.gc && (a.deleteTexture(this.gc), this.gc = null), b = !0;
            b && (this.Re.clearRect(0, 0, p, n), this.zc(this.Re, !0), this.gc || (this.gc = a.sd(p, n, this.b.ka, this.b.Dc)), a.Ds(this.cd, this.gc, this.b.Dc));
            this.Ei = p;
            this.Ci =
                n;
            a.ic(this.gc);
            a.We(this.opacity);
            a.gd();
            a.translate(-g, -u);
            a.md();
            var h = this.Db,
                H = this.b.devicePixelRatio;
            this.b.devicePixelRatio = 1;
            var b = this.u.ja(h.Ha, h.Ia, !0, !0),
                g = this.u.ja(h.Ha, h.Ia, !1, !0),
                u = this.u.ja(h.Ab, h.Bb, !0, !0),
                ca = this.u.ja(h.Ab, h.Bb, !1, !0),
                J = this.u.ja(h.tb, h.ub, !0, !0),
                G = this.u.ja(h.tb, h.ub, !1, !0),
                ia = this.u.ja(h.rb, h.sb, !0, !0),
                h = this.u.ja(h.rb, h.sb, !1, !0);
            this.b.devicePixelRatio = H;
            if (this.b.dd || 0 === this.q && 0 === d) var H = (b + 0.5 | 0) - b,
                ja = (g + 0.5 | 0) - g,
                b = b + H,
                g = g + ja,
                u = u + H,
                ca = ca + ja,
                J = J + H,
                G = G +
                ja,
                ia = ia + H,
                h = h + ja;
            0 === this.q && 0 === d ? (u = b + p, ca = g, J = u, G = g + n, ia = b, h = G, e.right = 1, e.bottom = 1) : (e.right = l / p, e.bottom = k / n);
            a.ed(b, g, u, ca, J, G, ia, h, e);
            a.gd();
            a.scale(c, c);
            a.yl(-this.u.oc());
            a.translate((this.u.nb + this.u.lc) / -2, (this.u.ob + this.u.kc) / -2);
            a.md();
            this.Og = this.b.Lc
        }
    };
    var a = [];
    d.tp = function(b) {
        a.length = 0;
        for (var c = "", d, e = 0; e < b.length;)
            if (d = b.charAt(e), "\n" === d) c.length && (a.push(c), c = ""), a.push("\n"), ++e;
            else if (" " === d || "\t" === d || "-" === d) {
            do c += b.charAt(e), e++; while (e < b.length && (" " === b.charAt(e) ||
                    "\t" === b.charAt(e)));
            a.push(c);
            c = ""
        } else e < b.length && (c += d, e++);
        c.length && a.push(c)
    };
    var l = [];
    d.vp = function(a, b, c, d, l) {
        if (a && a.length)
            if (2 >= d) k(b);
            else {
                if (100 >= a.length && -1 === a.indexOf("\n")) {
                    var t = c.measureText(a).width;
                    if (t <= d) {
                        k(b);
                        b.push(e());
                        b[0].text = a;
                        b[0].width = t;
                        return
                    }
                }
                this.wp(a, b, c, d, l)
            } else k(b)
    };
    d.wp = function(b, c, d, k, m) {
        m && (this.tp(b), b = a);
        var t = "",
            w, p, n, g = 0;
        for (n = 0; n < b.length; n++) "\n" === b[n] ? (g >= c.length && c.push(e()), p = c[g], p.text = t, p.width = d.measureText(t).width, g++, t = "") : (w = t, t += b[n],
            p = d.measureText(t).width, p >= k && (g >= c.length && c.push(e()), p = c[g], p.text = w, p.width = d.measureText(w).width, g++, t = b[n], m || " " !== t || (t = "")));
        t.length && (g >= c.length && c.push(e()), p = c[g], p.text = t, p.width = d.measureText(t).width, g++);
        for (n = g; n < c.length; n++) l.push(c[n]);
        c.length = g
    };
    d.n = new(r());
    c.prototype.ta = function(a) {
        z(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Ye = !0, this.b.qa = !0)
    };
    d.j = new c;
    d.Ta = new(r())
})();

function Tb(e) {
    this.b = e
}
(function() {
    function e() {}

    function k() {}
    var c = Tb.prototype;
    c.ba = function(a) {
        this.Aa = a;
        this.b = a.b
    };
    c.ba.prototype.N = r();
    c.U = function(a) {
        this.type = a;
        this.b = a.b
    };
    var d = c.U.prototype,
        b = "text password email number tel url".split(" "); - 1 < navigator.userAgent.indexOf("MSIE 9") && (b[2] = "text", b[3] = "text", b[4] = "text", b[5] = "text");
    d.N = function() {
        if (this.b.da) y("[Construct 2] Textbox plugin not supported on this platform - the object will not be created");
        else {
            6 === this.D[7] ? (this.B = document.createElement("textarea"),
                jQuery(this.B).css("resize", "none")) : (this.B = document.createElement("input"), this.B.type = b[this.D[7]]);
            this.B.id = this.D[9];
            jQuery(this.B).appendTo(this.b.pf ? this.b.pf : "body");
            this.B.autocomplete = "off";
            this.B.value = this.D[0];
            this.B.placeholder = this.D[1];
            this.B.title = this.D[2];
            this.B.disabled = 0 === this.D[4];
            this.B.readOnly = 1 === this.D[5];
            this.B.spellcheck = 1 === this.D[6];
            this.Kj = 0 !== this.D[8];
            this.Mb = !1;
            0 === this.D[3] && (jQuery(this.B).hide(), this.visible = !1, this.Mb = !0);
            var a = function(a) {
                return function() {
                    a.b.trigger(Tb.prototype.n.pp,
                        a)
                }
            }(this);
            this.B.oninput = a; - 1 !== navigator.userAgent.indexOf("MSIE") && (this.B.oncut = a);
            this.B.onclick = function(a) {
                return function(b) {
                    b.stopPropagation();
                    a.b.za = !0;
                    a.b.trigger(Tb.prototype.n.Aj, a);
                    a.b.za = !1
                }
            }(this);
            this.B.ondblclick = function(a) {
                return function(b) {
                    b.stopPropagation();
                    a.b.za = !0;
                    a.b.trigger(Tb.prototype.n.dp, a);
                    a.b.za = !1
                }
            }(this);
            this.B.addEventListener("touchstart", function(a) {
                a.stopPropagation()
            }, !1);
            this.B.addEventListener("touchmove", function(a) {
                a.stopPropagation()
            }, !1);
            this.B.addEventListener("touchend",
                function(a) {
                    a.stopPropagation()
                }, !1);
            jQuery(this.B).mousedown(function(a) {
                a.stopPropagation()
            });
            jQuery(this.B).mouseup(function(a) {
                a.stopPropagation()
            });
            jQuery(this.B).keydown(function(a) {
                13 !== a.which && 27 != a.which && a.stopPropagation()
            });
            jQuery(this.B).keyup(function(a) {
                13 !== a.which && 27 != a.which && a.stopPropagation()
            });
            this.Jg = this.Kg = this.Dg = this.Hg = this.Ig = this.Fg = 0;
            this.yh(!0);
            this.b.wh(this)
        }
    };
    d.Qa = function() {
        return {
            text: this.B.value,
            placeholder: this.B.placeholder,
            tooltip: this.B.title,
            disabled: !!this.B.disabled,
            readonly: !!this.B.readOnly,
            spellcheck: !!this.B.spellcheck
        }
    };
    d.ab = function(a) {
        this.B.value = a.text;
        this.B.placeholder = a.placeholder;
        this.B.title = a.tooltip;
        this.B.disabled = a.disabled;
        this.B.readOnly = a.readonly;
        this.B.spellcheck = a.spellcheck
    };
    d.Jd = function() {
        this.b.da || (jQuery(this.B).remove(), this.B = null)
    };
    d.zb = function() {
        this.yh()
    };
    d.yh = function(a) {
        if (!this.b.da) {
            var b = this.u.ja(this.x, this.y, !0),
                c = this.u.ja(this.x, this.y, !1),
                d = this.u.ja(this.x + this.width, this.y + this.height, !0),
                e = this.u.ja(this.x + this.width,
                    this.y + this.height, !1);
            if (!this.visible || !this.u.visible || 0 >= d || 0 >= e || b >= this.b.width || c >= this.b.height) this.Mb || jQuery(this.B).hide(), this.Mb = !0;
            else {
                1 > b && (b = 1);
                1 > c && (c = 1);
                d >= this.b.width && (d = this.b.width - 1);
                e >= this.b.height && (e = this.b.height - 1);
                var k = window.innerWidth,
                    m = window.innerHeight;
                a || this.Fg !== b || this.Ig !== c || this.Hg !== d || this.Dg !== e || this.Kg !== k || this.Jg !== m ? (this.Fg = b, this.Ig = c, this.Hg = d, this.Dg = e, this.Kg = k, this.Jg = m, this.Mb && (jQuery(this.B).show(), this.Mb = !1), a = Math.round(b) + jQuery(this.b.canvas).offset().left,
                    k = Math.round(c) + jQuery(this.b.canvas).offset().top, jQuery(this.B).css("position", "absolute"), jQuery(this.B).offset({
                        left: a,
                        top: k
                    }), jQuery(this.B).width(Math.round(d - b)), jQuery(this.B).height(Math.round(e - c)), this.Kj && jQuery(this.B).css("font-size", this.u.Eb(!0) / this.b.devicePixelRatio - 0.2 + "em")) : this.Mb && (jQuery(this.B).show(), this.Mb = !1)
            }
        }
    };
    d.zc = r();
    d.$b = r();
    e.prototype.pp = x(!0);
    e.prototype.Aj = x(!0);
    e.prototype.dp = x(!0);
    c.n = new e;
    k.prototype.ta = function(a) {
        this.b.da || (this.B.value = a)
    };
    k.prototype.om =
        function(a) {
            this.b.da || (this.visible = 0 !== a)
        };
    c.j = new k;
    c.Ta = new(r())
})();

function Ub(e) {
    this.b = e
}
(function() {
    var e = Ub.prototype;
    e.ba = function(c) {
        this.Aa = c;
        this.b = c.b
    };
    var k = e.ba.prototype;
    k.N = function() {
        this.P || (this.V = new Image, this.V.idtkLoadDisposed = !0, this.V.src = this.Ol, this.V.Im = this.Pl, this.b.Oo(this.V), this.Ca = this.pattern = null)
    };
    k.Qi = function() {
        this.P || (this.Ca = null)
    };
    k.fl = function() {
        if (!this.P && this.k.length) {
            this.Ca || (this.Ca = this.b.I.Ji(this.V, !0, this.b.ka, this.Ql));
            var c, d;
            c = 0;
            for (d = this.k.length; c < d; c++) this.k[c].Ca = this.Ca
        }
    };
    k.Rk = function() {
        this.P || this.Ca || !this.b.I || (this.Ca =
            this.b.I.Ji(this.V, !0, this.b.ka, this.Ql))
    };
    k.Wl = function() {
        this.P || this.k.length || !this.Ca || (this.b.I.deleteTexture(this.Ca), this.Ca = null)
    };
    k.nl = function(c) {
        c.drawImage(this.V, 0, 0)
    };
    e.U = function(c) {
        this.type = c;
        this.b = c.b
    };
    k = e.U.prototype;
    k.N = function() {
        this.visible = 0 === this.D[0];
        this.me = new sa(0, 0, 0, 0);
        this.gn = !1;
        this.V = this.type.V;
        this.b.I ? (this.type.Rk(), this.Ca = this.type.Ca) : (this.type.pattern || (this.type.pattern = this.b.ua.createPattern(this.type.V, "repeat")), this.pattern = this.type.pattern)
    };
    k.Yc =
        function() {
            this.gn = !1;
            this.V = this.type.V
        };
    k.Jd = function() {
        this.b.I && this.gn && this.Ca && (this.b.I.deleteTexture(this.Ca), this.Ca = null)
    };
    k.zc = function(c) {
        c.globalAlpha = this.opacity;
        c.save();
        c.fillStyle = this.pattern;
        var d = this.x,
            b = this.y;
        this.b.dd && (d = d + 0.5 | 0, b = b + 0.5 | 0);
        var a = -(this.Ob * this.width),
            e = -(this.Pb * this.height),
            f = a % this.V.width,
            k = e % this.V.height;
        0 > f && (f += this.V.width);
        0 > k && (k += this.V.height);
        c.translate(d, b);
        c.rotate(this.q);
        c.translate(f, k);
        c.fillRect(a - f, e - k, this.width, this.height);
        c.restore()
    };
    k.$b = function(c) {
        c.ic(this.Ca);
        c.We(this.opacity);
        var d = this.me;
        d.right = this.width / this.V.width;
        d.bottom = this.height / this.V.height;
        var b = this.Db;
        if (this.b.dd) {
            var a = (this.x + 0.5 | 0) - this.x,
                e = (this.y + 0.5 | 0) - this.y;
            c.ed(b.Ha + a, b.Ia + e, b.Ab + a, b.Bb + e, b.tb + a, b.ub + e, b.rb + a, b.sb + e, d)
        } else c.ed(b.Ha, b.Ia, b.Ab, b.Bb, b.tb, b.ub, b.rb, b.sb, d)
    };
    e.n = new(r());
    e.j = new(r());
    e.Ta = new(r())
})();

function Z(e) {
    this.b = e
}
(function() {
    function e(a) {
        f = a.x;
        q = a.y;
        s = a.z
    }

    function k(a) {
        v = a.x;
        m = a.y;
        t = a.z
    }

    function c() {}

    function d() {}
    var b = Z.prototype;
    b.ba = function(a) {
        this.Aa = a;
        this.b = a.b
    };
    b.ba.prototype.N = r();
    b.U = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.Xk = !1
    };
    var a = b.U.prototype,
        l = {
            left: 0,
            top: 0
        };
    a.kg = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var f = 0,
        q = 0,
        s = 0,
        v = 0,
        m = 0,
        t = 0;
    a.N = function() {
        this.Dr = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.we = this.Xj = this.Wj = this.vm = this.um = this.tm = this.zp = this.yp = this.xp = this.fh = this.eh = this.dh = 0;
        this.Bs = 0 !== this.D[0];
        var a = 0 < this.b.Nb ? document : this.b.canvas,
            b = document;
        this.b.Bd ? b = a = window.Canvas : this.b.Cc && (b = a = window);
        var c = this;
        window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function(a) {
                c.Sn(a)
            }, !1), a.addEventListener("pointermove", function(a) {
                c.Rn(a)
            }, !1), b.addEventListener("pointerup", function(a) {
                c.Ri(a)
            }, !1), b.addEventListener("pointercancel", function(a) {
                c.Ri(a)
            }, !1), this.b.canvas &&
            (this.b.canvas.addEventListener("MSGestureHold", function(a) {
                a.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(a) {
                a.preventDefault()
            }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
                a.preventDefault()
            }, !1), document.addEventListener("gesturehold", function(a) {
                a.preventDefault()
            }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.Sn(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.Rn(a)
        }, !1), b.addEventListener("MSPointerUp",
            function(a) {
                c.Ri(a)
            }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.Ri(a)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.Vn(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.Un(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.gl(a)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.gl(a)
        }, !1));
        if (this.Dr) {
            var d =
                function(a) {
                    a = a.reading;
                    c.tm = a.accelerationX;
                    c.um = a.accelerationY;
                    c.vm = a.accelerationZ
                },
                f = function(a) {
                    a = a.reading;
                    c.dh = a.yawDegrees;
                    c.eh = a.pitchDegrees;
                    c.fh = a.rollDegrees
                },
                h = Windows.Devices.Sensors.Accelerometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", d));
            var l = Windows.Devices.Sensors.Inclinometer.getDefault();
            l && (l.reportInterval = Math.max(l.minimumReportInterval, 16), l.addEventListener("readingchanged", f));
            document.addEventListener("visibilitychange",
                function() {
                    document.hidden || document.msHidden ? (h && h.removeEventListener("readingchanged", d), l && l.removeEventListener("readingchanged", f)) : (h && h.addEventListener("readingchanged", d), l && l.addEventListener("readingchanged", f))
                }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.dh = a.alpha || 0;
            c.eh = a.beta || 0;
            c.fh = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.xp = a.accelerationIncludingGravity.x || 0, c.yp = a.accelerationIncludingGravity.y ||
                0, c.zp = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.tm = a.acceleration.x || 0, c.um = a.acceleration.y || 0, c.vm = a.acceleration.z || 0)
        }, !1);
        this.Bs && !this.b.da && (jQuery(document).mousemove(function(a) {
            c.dl(a)
        }), jQuery(document).mousedown(function(a) {
            c.cl(a)
        }), jQuery(document).mouseup(function(a) {
            c.el(a)
        }));
        this.b.wg && !this.b.Bd && AppMobi.accelerometer.watchAcceleration(e, {
            frequency: 40,
            adjustForRotation: !0
        });
        this.b.Bf && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(k,
            null, {
                frequency: 40
            });
        this.b.rs(this)
    };
    a.Rn = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.kg(a.pointerId),
                c = Ma();
            if (0 <= b) {
                var d = this.b.da ? l : jQuery(this.b.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || (b.Di = b.time, b.fe = b.x, b.ge = b.y, b.time = c, b.x = a.pageX - d.left, b.y = a.pageY - d.top)
            }
        }
    };
    a.Sn = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.b.da ?
                l : jQuery(this.b.canvas).offset(),
                c = a.pageX - b.left,
                b = a.pageY - b.top,
                d = Ma();
            this.we = this.touches.length;
            this.touches.push({
                time: d,
                x: c,
                y: b,
                Di: d,
                fe: c,
                ge: b,
                id: a.pointerId,
                Kl: this.we
            });
            this.b.za = !0;
            this.b.trigger(Z.prototype.n.jm, this);
            this.b.trigger(Z.prototype.n.lm, this);
            this.Wj = c;
            this.Xj = b;
            this.b.trigger(Z.prototype.n.Wb, this);
            this.b.za = !1
        }
    };
    a.Ri = function(a) {
        a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType && (a.preventDefault && a.preventDefault(), a = this.kg(a.pointerId), this.we = 0 <= a ? this.touches[a].Kl :
            -1, this.b.za = !0, this.b.trigger(Z.prototype.n.im, this), this.b.trigger(Z.prototype.n.km, this), this.b.za = !1, 0 <= a && this.touches.splice(a, 1))
    };
    a.Un = function(a) {
        a.preventDefault && a.preventDefault();
        var b = Ma(),
            c, d, e, f;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++)
            if (e = a.changedTouches[c], f = this.kg(e.identifier), 0 <= f) {
                var k = this.b.da ? l : jQuery(this.b.canvas).offset();
                f = this.touches[f];
                2 > b - f.time || (f.Di = f.time, f.fe = f.x, f.ge = f.y, f.time = b, f.x = e.pageX - k.left, f.y = e.pageY - k.top)
            }
    };
    a.Vn = function(a) {
        a.preventDefault &&
            a.preventDefault();
        var b = this.b.da ? l : jQuery(this.b.canvas).offset(),
            c = Ma();
        this.b.za = !0;
        var d, e, f, k;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++)
            if (f = a.changedTouches[d], k = this.kg(f.identifier), -1 === k) {
                k = f.pageX - b.left;
                var m = f.pageY - b.top;
                this.we = this.touches.length;
                this.touches.push({
                    time: c,
                    x: k,
                    y: m,
                    Di: c,
                    fe: k,
                    ge: m,
                    id: f.identifier,
                    Kl: this.we
                });
                this.b.trigger(Z.prototype.n.jm, this);
                this.b.trigger(Z.prototype.n.lm, this);
                this.Wj = k;
                this.Xj = m;
                this.b.trigger(Z.prototype.n.Wb, this)
            }
        this.b.za = !1
    };
    a.gl = function(a) {
        a.preventDefault &&
            a.preventDefault();
        this.b.za = !0;
        var b, c, d;
        b = 0;
        for (c = a.changedTouches.length; b < c; b++) d = a.changedTouches[b], d = this.kg(d.identifier), 0 <= d && (this.we = this.touches[d].Kl, this.b.trigger(Z.prototype.n.im, this), this.b.trigger(Z.prototype.n.km, this), this.touches.splice(d, 1));
        this.b.za = !1
    };
    a.Qt = function() {
        return this.b.wg && 0 === this.dh && 0 !== s ? 90 * s : this.b.Bf && 0 === this.dh && 0 !== t ? 90 * t : this.dh
    };
    a.Rt = function() {
        return this.b.wg && 0 === this.eh && 0 !== q ? -90 * q : this.b.Bf && 0 === this.eh && 0 !== m ? -90 * m : this.eh
    };
    a.Vt = function() {
        return this.b.wg &&
            0 === this.fh && 0 !== f ? 90 * f : this.b.Bf && 0 === this.fh && 0 !== v ? 90 * v : this.fh
    };
    a.cl = function(a) {
        a.preventDefault && this.b.yf && !this.b.Dc && a.preventDefault();
        this.Vn({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Xk = !0
    };
    a.dl = function(a) {
        this.Xk && this.Un({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    a.el = function(a) {
        a.preventDefault && this.b.yf && !this.b.Dc && a.preventDefault();
        this.b.yf = !0;
        this.gl({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Xk = !1
    };
    a.vh =
        function() {
            var a, b, c, d = Ma();
            a = 0;
            for (b = this.touches.length; a < b; a++) c = this.touches[a], c.time <= d - 50 && (c.Di = d)
        };
    c.prototype.lm = x(!0);
    c.prototype.km = x(!0);
    c.prototype.Wb = function(a) {
        return a ? this.b.Ml(a, this.Wj, this.Xj, !1) : !1
    };
    c.prototype.hf = function(a) {
        if (!a) return !1;
        var b = a.ca(),
            c = b.pc(),
            d, e, f = [],
            l, k, m, q;
        l = 0;
        for (k = c.length; l < k; l++) {
            var s = c[l];
            s.Ea();
            m = 0;
            for (q = this.touches.length; m < q; m++)
                if (e = this.touches[m], d = s.u.Ra(e.x, e.y, !0), e = s.u.Ra(e.x, e.y, !1), s.Jb(d, e)) {
                    f.push(s);
                    break
                }
        }
        return f.length ? (b.na = !1,
            b.k = f, a.vc(), !0) : !1
    };
    c.prototype.jm = function(a) {
        a = Math.floor(a);
        return a === this.we
    };
    c.prototype.im = function(a) {
        a = Math.floor(a);
        return a === this.we
    };
    b.n = new c;
    d.prototype.qm = function(a, b) {
        if (this.touches.length) {
            var c, d, e, f, l;
            ga(b) ? (c = this.b.yd(0), d = c.scale, e = c.Cb, f = c.Sb, l = c.q, c.scale = this.b.ea.scale, c.Cb = 1, c.Sb = 1, c.q = this.b.ea.q, a.M(c.Ra(this.touches[0].x, this.touches[0].y, !0)), c.scale = d, c.Cb = e, c.Sb = f, c.q = l) : (c = z(b) ? this.b.yd(b) : this.b.ng(b)) ? a.M(c.Ra(this.touches[0].x, this.touches[0].y, !0)) : a.M(0)
        } else a.M(0)
    };
    d.prototype.rm = function(a, b) {
        if (this.touches.length) {
            var c, d, e, f, l;
            ga(b) ? (c = this.b.yd(0), d = c.scale, e = c.Cb, f = c.Tb, l = c.q, c.scale = this.b.ea.scale, c.Cb = 1, c.Tb = 1, c.q = this.b.ea.q, a.M(c.Ra(this.touches[0].x, this.touches[0].y, !1)), c.scale = d, c.Cb = e, c.Tb = f, c.q = l) : (c = z(b) ? this.b.yd(b) : this.b.ng(b)) ? a.M(c.Ra(this.touches[0].x, this.touches[0].y, !1)) : a.M(0)
        } else a.M(0)
    };
    b.Ta = new d
})();

function Vb(e) {
    this.b = e
}
(function() {
    var e = Vb.prototype;
    e.ba = function(c) {
        this.J = c;
        this.b = c.b
    };
    e.ba.prototype.N = r();
    e.U = function(c, d) {
        this.type = c;
        this.J = c.J;
        this.d = d;
        this.b = c.b
    };
    var k = e.U.prototype;
    k.N = function() {
        var c = this.D[0];
        this.Ja = this.D[1];
        this.ac = this.D[2];
        this.Fp = 0 !== this.D[3];
        this.Fl = 0 !== this.D[4];
        this.A = Math.cos(this.d.q) * c;
        this.C = Math.sin(this.d.q) * c;
        this.fe = this.d.x;
        this.ge = this.d.y;
        this.Ec = this.d.q;
        this.sj = 0;
        this.enabled = 0 !== this.D[5]
    };
    k.Qa = function() {
        return {
            acc: this.Ja,
            g: this.ac,
            dx: this.A,
            dy: this.C,
            lx: this.fe,
            ly: this.ge,
            lka: this.Ec,
            t: this.sj,
            e: this.enabled
        }
    };
    k.ab = function(c) {
        this.Ja = c.acc;
        this.ac = c.g;
        this.A = c.dx;
        this.C = c.dy;
        this.fe = c.lx;
        this.ge = c.ly;
        this.Ec = c.lka;
        this.sj = c.t;
        this.enabled = c.e
    };
    k.zb = function() {
        if (this.enabled) {
            var c = this.b.De(this.d),
                d, b;
            this.d.q !== this.Ec && (this.Fl && (d = Ha(0, 0, this.A, this.C), this.A = Math.cos(this.d.q) * d, this.C = Math.sin(this.d.q) * d), this.Ec = this.d.q);
            0 !== this.Ja && (d = Ha(0, 0, this.A, this.C), b = 0 === this.A && 0 === this.C ? this.d.q : Da(0, 0, this.A, this.C), d += this.Ja * c, 0 > d && (d = 0), this.A =
                Math.cos(b) * d, this.C = Math.sin(b) * d);
            0 !== this.ac && (this.C += this.ac * c);
            this.fe = this.d.x;
            this.ge = this.d.y;
            if (0 !== this.A || 0 !== this.C)
                if (this.d.x += this.A * c, this.d.y += this.C * c, this.sj += Ha(0, 0, this.A * c, this.C * c), this.Fl && (this.d.q = Da(0, 0, this.A, this.C), this.d.F(), this.Ec = this.d.q), this.d.F(), this.Fp && (d = this.b.Ma(this.d))) this.b.fd(this.d, d), d = Ha(0, 0, this.A, this.C), b = this.b.Jp(this.d, this.fe, this.ge), this.A = Math.cos(b) * d, this.C = Math.sin(b) * d, this.d.x += this.A * c, this.d.y += this.C * c, this.d.F(), this.Fl && (this.Ec =
                    this.d.q = b, this.d.F()), this.b.Vc(this.d, this.A / d, this.C / d, Math.max(2.5 * d * c, 30)) || this.b.ql(this.d, 100)
        }
    };
    e.n = new(r());
    e.j = new(r());
    e.Ta = new(r())
})();

function Wb(e) {
    this.b = e
}
(function() {
    function e() {}
    var k = Wb.prototype;
    k.ba = function(c) {
        this.J = c;
        this.b = c.b
    };
    k.ba.prototype.N = r();
    k.U = function(c, b) {
        this.type = c;
        this.J = c.J;
        this.d = b;
        this.b = c.b;
        this.Nd = this.Md = this.hj = this.ij = this.Fe = this.Ld = this.Gd = this.$h = this.wj = !1;
        this.Kk = this.Jk = this.Ik = this.Lk = -1;
        this.C = this.A = 0
    };
    var c = k.U.prototype;
    c.N = function() {
        this.Hc = this.D[0];
        this.Ja = this.D[1];
        this.wb = this.D[2];
        this.ck = this.D[3];
        this.Hj = this.D[4];
        this.ak = 1 === this.D[5];
        this.enabled = 0 !== this.D[6];
        this.ak && !this.b.da && (jQuery(document).keydown(function(c) {
                return function(b) {
                    c.ah(b)
                }
            }(this)),
            jQuery(document).keyup(function(c) {
                return function(b) {
                    c.bh(b)
                }
            }(this)))
    };
    c.Qa = function() {
        return {
            dx: this.A,
            dy: this.C,
            enabled: this.enabled,
            maxspeed: this.Hc,
            acc: this.Ja,
            dec: this.wb,
            ignoreInput: this.Fe
        }
    };
    c.ab = function(c) {
        this.A = c.dx;
        this.C = c.dy;
        this.enabled = c.enabled;
        this.Hc = c.maxspeed;
        this.Ja = c.acc;
        this.wb = c.dec;
        this.Fe = c.ignoreInput;
        this.Nd = this.Md = this.hj = this.ij = this.Ld = this.Gd = this.$h = this.wj = !1;
        this.Kk = this.Jk = this.Ik = this.Lk = -1
    };
    c.ah = function(c) {
        var b = this.b.Lc;
        switch (c.which) {
            case 37:
                c.preventDefault();
                this.Jk < b && (this.Gd = !0);
                break;
            case 38:
                c.preventDefault();
                this.Lk < b && (this.wj = !0);
                break;
            case 39:
                c.preventDefault();
                this.Kk < b && (this.Ld = !0);
                break;
            case 40:
                c.preventDefault(), this.Ik < b && (this.$h = !0)
        }
    };
    c.bh = function(c) {
        var b = this.b.Lc;
        switch (c.which) {
            case 37:
                c.preventDefault();
                this.Gd = !1;
                this.Jk = b;
                break;
            case 38:
                c.preventDefault();
                this.wj = !1;
                this.Lk = b;
                break;
            case 39:
                c.preventDefault();
                this.Ld = !1;
                this.Kk = b;
                break;
            case 40:
                c.preventDefault(), this.$h = !1, this.Ik = b
        }
    };
    c.zb = function() {
        var c = this.b.De(this.d),
            b = this.Gd ||
            this.Md,
            a = this.Ld || this.Nd,
            e = this.wj || this.ij,
            f = this.$h || this.hj;
        this.hj = this.ij = this.Nd = this.Md = !1;
        if (this.enabled) {
            var k = this.b.Ma(this.d);
            if (k && (this.b.fd(this.d, k), !this.b.ql(this.d))) return;
            this.Fe && (f = e = a = b = !1);
            0 === this.ck ? a = b = !1 : 1 === this.ck && (f = e = !1);
            2 === this.ck && (e || f) && (a = b = !1);
            b == a && (0 > this.A ? (this.A += this.wb * c, 0 < this.A && (this.A = 0)) : 0 < this.A && (this.A -= this.wb * c, 0 > this.A && (this.A = 0)));
            e == f && (0 > this.C ? (this.C += this.wb * c, 0 < this.C && (this.C = 0)) : 0 < this.C && (this.C -= this.wb * c, 0 > this.C && (this.C =
                0)));
            b && !a && (this.A = 0 < this.A ? this.A - (this.Ja + this.wb) * c : this.A - this.Ja * c);
            a && !b && (this.A = 0 > this.A ? this.A + (this.Ja + this.wb) * c : this.A + this.Ja * c);
            e && !f && (this.C = 0 < this.C ? this.C - (this.Ja + this.wb) * c : this.C - this.Ja * c);
            f && !e && (this.C = 0 > this.C ? this.C + (this.Ja + this.wb) * c : this.C + this.Ja * c);
            if (0 !== this.A || 0 !== this.C) {
                Math.sqrt(this.A * this.A + this.C * this.C) > this.Hc && (k = Math.atan2(this.C, this.A), this.A = this.Hc * Math.cos(k), this.C = this.Hc * Math.sin(k));
                a = this.d.x;
                e = this.d.y;
                b = this.d.q;
                this.d.x += this.A * c;
                this.d.F();
                if (k = this.b.Ma(this.d)) this.d.x = a, this.A = 0, this.d.F(), this.b.fd(this.d, k);
                this.d.y += this.C * c;
                this.d.F();
                if (k = this.b.Ma(this.d)) this.d.y = e, this.C = 0, this.d.F(), this.b.fd(this.d, k);
                c = Ta(this.A);
                k = Ta(this.C);
                if (0 !== c || 0 !== k) 1 === this.Hj ? this.d.q = Ca(90 * Math.round(za(Math.atan2(k, c)) / 90)) : 2 === this.Hj ? this.d.q = Ca(45 * Math.round(za(Math.atan2(k, c)) / 45)) : 3 === this.Hj && (this.d.q = Math.atan2(k, c));
                this.d.F();
                this.d.q != b && (k = this.b.Ma(this.d)) && (this.d.q = b, this.d.F(), this.b.fd(this.d, k))
            }
        }
    };
    k.n = new(r());
    e.prototype.xe =
        function(c) {
            switch (c) {
                case 0:
                    this.Md = !0;
                    break;
                case 1:
                    this.Nd = !0;
                    break;
                case 2:
                    this.ij = !0;
                    break;
                case 3:
                    this.hj = !0
            }
        };
    k.j = new e;
    k.Ta = new(r())
})();

function Xb(e) {
    this.b = e
}
(function() {
    function e() {}
    var k = Xb.prototype;
    k.ba = function(c) {
        this.J = c;
        this.b = c.b
    };
    k.ba.prototype.N = r();
    k.U = function(c, b) {
        this.type = c;
        this.J = c.J;
        this.d = b;
        this.b = c.b
    };
    var c = k.U.prototype;
    c.N = function() {
        this.Ze = this.Od = this.rh = this.$k = this.hl = 0
    };
    c.Qa = function() {
        return {
            ontime: this.hl,
            offtime: this.$k,
            stage: this.rh,
            stagetimeleft: this.Od,
            timeleft: this.Ze
        }
    };
    c.ab = function(c) {
        this.hl = c.ontime;
        this.$k = c.offtime;
        this.rh = c.stage;
        this.Od = c.stagetimeleft;
        this.Ze = c.timeleft
    };
    c.zb = function() {
        if (!(0 >= this.Ze)) {
            var c =
                this.b.De(this.d);
            this.Ze -= c;
            0 >= this.Ze ? (this.Ze = 0, this.d.visible = !0, this.b.qa = !0, this.b.trigger(Xb.prototype.n.fp, this.d)) : (this.Od -= c, 0 >= this.Od && (0 === this.rh ? (this.d.visible = !1, this.rh = 1, this.Od += this.$k) : (this.d.visible = !0, this.rh = 0, this.Od += this.hl), this.b.qa = !0))
        }
    };
    e.prototype.fp = x(!0);
    k.n = new e;
    k.j = new(r());
    k.Ta = new(r())
})();

function Yb(e) {
    this.b = e
}
(function() {
    var e = Yb.prototype;
    e.ba = function(c) {
        this.J = c;
        this.b = c.b
    };
    e.ba.prototype.N = r();
    e.U = function(c, d) {
        this.type = c;
        this.J = c.J;
        this.d = d;
        this.b = c.b
    };
    var k = e.U.prototype;
    k.N = function() {
        this.kb = null;
        this.Ti = -1;
        this.mode = this.Ec = this.Rl = this.Xg = this.le = this.Si = 0;
        var c = this;
        this.hc || (this.Wg = function(d) {
            c.al(d)
        });
        this.b.Ej(this.Wg)
    };
    k.Qa = function() {
        return {
            uid: this.kb ? this.kb.uid : -1,
            pa: this.Si,
            pd: this.le,
            msa: this.Xg,
            tsa: this.Rl,
            lka: this.Ec,
            m: this.mode
        }
    };
    k.ab = function(c) {
        this.Ti = c.uid;
        this.Si = c.pa;
        this.le =
            c.pd;
        this.Xg = c.msa;
        this.Rl = c.tsa;
        this.Ec = c.lka;
        this.mode = c.m
    };
    k.Yc = function() {
        this.kb = -1 === this.Ti ? null : this.b.og(this.Ti);
        this.Ti = -1
    };
    k.al = function(c) {
        this.kb == c && (this.kb = null)
    };
    k.Jd = function() {
        this.kb = null;
        this.b.jo(this.Wg)
    };
    k.zb = r();
    k.vh = function() {
        if (this.kb) {
            this.Ec !== this.d.q && (this.Xg = L(this.Xg + (this.d.q - this.Ec)));
            var c = this.d.x,
                d = this.d.y;
            if (3 === this.mode || 4 === this.mode) {
                var b = Ha(this.d.x, this.d.y, this.kb.x, this.kb.y);
                if (b > this.le || 4 === this.mode && b < this.le) d = Da(this.kb.x, this.kb.y, this.d.x,
                    this.d.y), c = this.kb.x + Math.cos(d) * this.le, d = this.kb.y + Math.sin(d) * this.le
            } else c = this.kb.x + Math.cos(this.kb.q + this.Si) * this.le, d = this.kb.y + Math.sin(this.kb.q + this.Si) * this.le;
            this.Ec = b = L(this.Xg + (this.kb.q - this.Rl));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.d.x === c && this.d.y === d || (this.d.x = c, this.d.y = d, this.d.F());
            0 !== this.mode && 2 !== this.mode || this.d.q === b || (this.d.q = b, this.d.F())
        }
    };
    e.n = new(r());
    e.j = new(r());
    e.Ta = new(r())
})();

function Zb(e) {
    this.b = e
}
(function() {
    function e() {}

    function k() {}
    var c = Zb.prototype;
    c.ba = function(b) {
        this.J = b;
        this.b = b.b
    };
    c.ba.prototype.N = r();
    c.U = function(b, a) {
        this.type = b;
        this.J = b.J;
        this.d = a;
        this.b = b.b;
        this.qh = this.Nd = this.Md = this.Fe = this.Ff = this.Bg = this.Ld = this.Gd = !1;
        this.sc = null;
        this.Pk = -1;
        this.Le = this.Ke = 0;
        this.gi = !1;
        this.vf = this.Oc = 0;
        this.fi = !0;
        this.C = this.A = 0
    };
    var d = c.U.prototype;
    d.Ko = function() {
        this.fb = Math.cos(this.xf);
        this.gb = Math.sin(this.xf);
        this.Ue = Math.cos(this.xf - Math.PI / 2);
        this.Ve = Math.sin(this.xf - Math.PI /
            2);
        this.fb = Ta(this.fb);
        this.gb = Ta(this.gb);
        this.Ue = Ta(this.Ue);
        this.Ve = Ta(this.Ve);
        this.kk = this.ac;
        0 > this.ac && (this.fb *= -1, this.gb *= -1, this.ac = Math.abs(this.ac))
    };
    d.N = function() {
        this.Hc = this.D[0];
        this.Ja = this.D[1];
        this.wb = this.D[2];
        this.Fk = this.D[3];
        this.kk = this.ac = this.D[4];
        this.Mi = this.D[5];
        this.ak = 1 === this.D[6];
        this.enabled = 0 !== this.D[7];
        this.Yf = !1;
        this.Ch = this.b.te(this.d);
        this.Qk = -1;
        this.xf = E(90);
        this.Ko();
        var b = this;
        this.ak && !this.b.da && (jQuery(document).keydown(function(a) {
            b.ah(a)
        }), jQuery(document).keyup(function(a) {
            b.bh(a)
        }));
        this.hc || (this.Wg = function(a) {
            b.al(a)
        });
        this.b.Ej(this.Wg)
    };
    d.Qa = function() {
        return {
            ii: this.Fe,
            lfx: this.Ke,
            lfy: this.Le,
            lfo: this.sc ? this.sc.uid : -1,
            am: this.Oc,
            en: this.enabled,
            fall: this.vf,
            ft: this.fi,
            dx: this.A,
            dy: this.C,
            ms: this.Hc,
            acc: this.Ja,
            dec: this.wb,
            js: this.Fk,
            g: this.ac,
            g1: this.kk,
            mf: this.Mi,
            wof: this.Yf,
            woj: this.Ch ? this.Ch.uid : -1,
            ga: this.xf
        }
    };
    d.ab = function(b) {
        this.Fe = b.ii;
        this.Ke = b.lfx;
        this.Le = b.lfy;
        this.Pk = b.lfo;
        this.Oc = b.am;
        this.enabled = b.en;
        this.vf = b.fall;
        this.fi = b.ft;
        this.A = b.dx;
        this.C = b.dy;
        this.Hc = b.ms;
        this.Ja = b.acc;
        this.wb = b.dec;
        this.Fk = b.js;
        this.ac = b.g;
        this.kk = b.g1;
        this.Mi = b.mf;
        this.Yf = b.wof;
        this.Qk = b.woj;
        this.xf = b.ga;
        this.qh = this.Nd = this.Md = this.Ff = this.Bg = this.Ld = this.Gd = !1;
        this.Ko()
    };
    d.Yc = function() {
        this.sc = -1 === this.Pk ? null : this.b.og(this.Pk);
        this.Ch = -1 === this.Qk ? null : this.b.og(this.Qk)
    };
    d.al = function(b) {
        this.sc == b && (this.sc = null)
    };
    d.Jd = function() {
        this.sc = null;
        this.b.jo(this.Wg)
    };
    d.ah = function(b) {
        switch (b.which) {
            case 38:
                b.preventDefault();
                this.Bg = !0;
                break;
            case 37:
                b.preventDefault();
                this.Gd = !0;
                break;
            case 39:
                b.preventDefault(), this.Ld = !0
        }
    };
    d.bh = function(b) {
        switch (b.which) {
            case 38:
                b.preventDefault();
                this.Ff = this.Bg = !1;
                break;
            case 37:
                b.preventDefault();
                this.Gd = !1;
                break;
            case 39:
                b.preventDefault(), this.Ld = !1
        }
    };
    d.Ut = function() {
        return 0 > this.ac ? -1 : 1
    };
    d.pn = function() {
        var b = null,
            a = null,
            c, d;
        c = this.d.x;
        d = this.d.y;
        this.d.x += this.fb;
        this.d.y += this.gb;
        this.d.F();
        if (this.sc && this.b.jc(this.d, this.sc)) return this.d.x = c, this.d.y = d, this.d.F(), this.sc;
        (b = this.b.Ma(this.d)) || 0 !== this.vf || (a = this.b.te(this.d, !0));
        this.d.x = c;
        this.d.y = d;
        this.d.F();
        if (b) {
            if (this.b.jc(this.d, b)) return null;
            this.gi = !1;
            return b
        }
        if (a && a.length) {
            d = b = 0;
            for (c = a.length; b < c; b++) a[d] = a[b], this.b.jc(this.d, a[b]) || d++;
            if (1 <= d) return this.gi = !0, a[0]
        }
        return null
    };
    d.zb = r();
    d.bo = function() {
        var b = this.b.De(this.d),
            a, c, d, e, k, v, m, t, w;
        this.Bg || this.qh || (this.Ff = !1);
        var p = this.Gd || this.Md;
        d = this.Ld || this.Nd;
        var n = (this.Bg || this.qh) && !this.Ff;
        this.qh = this.Nd = this.Md = !1;
        if (this.enabled) {
            this.Fe && (n = d = p = !1);
            t = this.sc;
            w = !1;
            this.fi && ((this.b.Ma(this.d) ||
                this.b.te(this.d)) && this.b.Vc(this.d, -this.fb, -this.gb, 4, !0), this.fi = !1);
            !t || 0 !== this.C || t.y === this.Le && t.x === this.Ke || (a = t.x - this.Ke, c = t.y - this.Le, this.d.x += a, this.d.y += c, this.d.F(), this.Ke = t.x, this.Le = t.y, w = !0, this.b.Ma(this.d) && this.b.Vc(this.d, -a, -c, 2.5 * Math.sqrt(a * a + c * c)));
            var g = this.pn();
            if (c = this.b.Ma(this.d))
                if (this.b.ql(this.d, Math.max(this.d.width, this.d.height) / 2)) this.b.fd(this.d, c);
                else return;
            g ? (0 < this.C && (this.Yf || (this.b.pl(this.d, -this.fb, -this.gb, g), this.Yf = !0), this.C = 0), t != g ? (this.sc =
                g, this.Ke = g.x, this.Le = g.y, this.b.fd(this.d, g)) : w && (c = this.b.Ma(this.d)) && (this.b.fd(this.d, c), 0 !== a && (0 < a ? this.b.Vc(this.d, -this.Ue, -this.Ve) : this.b.Vc(this.d, this.Ue, this.Ve)), this.b.Vc(this.d, -this.fb, -this.gb)), n && (t = this.d.x, w = this.d.y, this.d.x -= this.fb, this.d.y -= this.gb, this.d.F(), this.b.Ma(this.d) ? n = !1 : (this.b.trigger(Zb.prototype.n.gp, this.d), this.Oc = 2, this.C = -this.Fk, this.Ff = !0), this.d.x = t, this.d.y = w, this.d.F())) : (this.sc = null, this.C += this.ac * b, this.C > this.Mi && (this.C = this.Mi), n && (this.Ff = !0));
            this.Yf = !!g;
            p == d && (0 > this.A ? (this.A += this.wb * b, 0 < this.A && (this.A = 0)) : 0 < this.A && (this.A -= this.wb * b, 0 > this.A && (this.A = 0)));
            p && !d && (this.A = 0 < this.A ? this.A - (this.Ja + this.wb) * b : this.A - this.Ja * b);
            d && !p && (this.A = 0 > this.A ? this.A + (this.Ja + this.wb) * b : this.A + this.Ja * b);
            this.A > this.Hc ? this.A = this.Hc : this.A < -this.Hc && (this.A = -this.Hc);
            p = !1;
            0 !== this.A && (t = this.d.x, w = this.d.y, a = this.A * b * this.Ue, c = this.A * b * this.Ve, this.d.x += this.Ue * (1 < this.A ? 1 : -1) - this.fb, this.d.y += this.Ve * (1 < this.A ? 1 : -1) - this.gb, this.d.F(),
                e = !1, k = this.b.Ma(this.d), this.d.x = t + a, this.d.y = w + c, this.d.F(), d = this.b.Ma(this.d), !d && g && (d = this.b.te(this.d)) && (this.d.x = t, this.d.y = w, this.d.F(), this.b.jc(this.d, d) ? (d = null, e = !1) : e = !0, this.d.x = t + a, this.d.y = w + c, this.d.F()), d ? (a = Math.abs(this.A * b) + 2, k || !this.b.Vc(this.d, -this.fb, -this.gb, a, e, d)) ? (this.b.fd(this.d, d), a = Math.max(Math.abs(2.5 * this.A * b), 30), this.b.Vc(this.d, this.Ue * (0 > this.A ? 1 : -1), this.Ve * (0 > this.A ? 1 : -1), a, !1) ? !g || e || this.gi || (t = this.d.x, w = this.d.y, this.d.x += this.fb, this.d.y += this.gb,
                    this.b.Ma(this.d) ? this.b.Vc(this.d, -this.fb, -this.gb, 3, !1) || (this.d.x = t, this.d.y = w, this.d.F()) : (this.d.x = t, this.d.y = w, this.d.F())) : (this.d.x = t, this.d.y = w, this.d.F()), e || (this.A = 0)) : !k && 15 > Math.abs(this.C) && (this.C = 0, g || (p = !0)) : (t = this.pn(), g && !t ? (c = Math.ceil(Math.abs(this.A * b)) + 2, t = this.d.x, w = this.d.y, this.d.x += this.fb * c, this.d.y += this.gb * c, this.d.F(), this.b.Ma(this.d) || this.b.te(this.d) ? this.b.Vc(this.d, -this.fb, -this.gb, c + 2, !0) : (this.d.x = t, this.d.y = w, this.d.F())) : t && 0 === this.C && this.b.pl(this.d, -this.fb, -this.gb, t)));
            if (0 !== this.C) {
                t = this.d.x;
                w = this.d.y;
                this.d.x += this.C * b * this.fb;
                this.d.y += this.C * b * this.gb;
                a = this.d.x;
                d = this.d.y;
                this.d.F();
                c = this.b.Ma(this.d);
                e = !1;
                if (!c && 0 < this.C && !g) {
                    if ((e = 0 < this.vf ? null : this.b.te(this.d, !0)) && e.length) {
                        if (this.Ch) {
                            this.d.x = t;
                            this.d.y = w;
                            this.d.F();
                            m = k = 0;
                            for (v = e.length; k < v; k++) e[m] = e[k], this.b.jc(this.d, e[k]) || m++;
                            e.length = m;
                            this.d.x = a;
                            this.d.y = d;
                            this.d.F()
                        }
                        1 <= e.length && (c = e[0])
                    }
                    e = !!c
                }
                c && (this.b.fd(this.d, c), a = e ? Math.abs(2.5 * this.C * b + 10) : Math.max(Math.abs(2.5 *
                    this.C * b + 10), 30), this.b.Vc(this.d, this.fb * (0 > this.C ? 1 : -1), this.gb * (0 > this.C ? 1 : -1), a, e, c) ? (this.sc = c, this.Ke = c.x, this.Le = c.y, (this.gi = e) && (p = !0), this.C = 0) : (this.d.x = t, this.d.y = w, this.d.F(), this.Yf = !0, e || (this.C = 0)))
            }
            3 !== this.Oc && 0 < this.C && !g && (this.b.trigger(Zb.prototype.n.ep, this.d), this.Oc = 3);
            if (g || p) 3 === this.Oc || p || n && 0 === this.C ? (this.b.trigger(Zb.prototype.n.jp, this.d), this.Oc = 0 === this.A && 0 === this.C ? 0 : 1) : (0 !== this.Oc && 0 === this.A && 0 === this.C && (this.b.trigger(Zb.prototype.n.op, this.d), this.Oc = 0),
                1 === this.Oc || 0 === this.A && 0 === this.C || n || (this.b.trigger(Zb.prototype.n.mp, this.d), this.Oc = 1));
            0 < this.vf && this.vf--;
            this.Ch = this.b.te(this.d)
        }
    };
    e.prototype.gp = x(!0);
    e.prototype.ep = x(!0);
    e.prototype.op = x(!0);
    e.prototype.mp = x(!0);
    e.prototype.jp = x(!0);
    c.n = new e;
    k.prototype.xe = function(b) {
        switch (b) {
            case 0:
                this.Md = !0;
                break;
            case 1:
                this.Nd = !0;
                break;
            case 2:
                this.qh = !0
        }
    };
    c.j = new k;
    c.Ta = new(r())
})();

function $b(e) {
    this.b = e
}
(function() {
    var e = $b.prototype;
    e.ba = function(a) {
        this.J = a;
        this.b = a.b
    };
    e.ba.prototype.N = r();
    e.U = function(a, b) {
        this.type = a;
        this.J = a.J;
        this.d = b;
        this.b = a.b;
        this.Ua = 0
    };
    var k = e.U.prototype,
        c = 2 * Math.PI,
        d = Math.PI / 2,
        b = 3 * Math.PI / 2;
    k.N = function() {
        this.qb = 1 === this.D[0];
        this.Vg = this.D[1];
        this.$l = this.D[2];
        this.Kd = this.D[3];
        this.Kd += Math.random() * this.D[4];
        0 === this.Kd ? this.Ua = 0 : (this.Ua = this.D[5] / this.Kd * c, this.Ua += Math.random() * this.D[6] / this.Kd * c);
        this.Qb = this.D[7];
        this.Qb += Math.random() * this.D[8];
        this.kh = this.He =
            this.Z = 0;
        this.init()
    };
    k.Qa = function() {
        return {
            i: this.Ua,
            a: this.qb,
            mv: this.Vg,
            w: this.$l,
            p: this.Kd,
            mag: this.Qb,
            iv: this.Z,
            iv2: this.He,
            r: this.kh,
            lkv: this.ec,
            lkv2: this.Eg
        }
    };
    k.ab = function(a) {
        this.Ua = a.i;
        this.qb = a.a;
        this.Vg = a.mv;
        this.$l = a.w;
        this.Kd = a.p;
        this.Qb = a.mag;
        this.Z = a.iv;
        this.He = a.iv2 || 0;
        this.kh = a.r;
        this.ec = a.lkv;
        this.Eg = a.lkv2 || 0
    };
    k.init = function() {
        switch (this.Vg) {
            case 0:
                this.Z = this.d.x;
                break;
            case 1:
                this.Z = this.d.y;
                break;
            case 2:
                this.Z = this.d.width;
                this.kh = this.d.height / this.d.width;
                break;
            case 3:
                this.Z =
                    this.d.width;
                break;
            case 4:
                this.Z = this.d.height;
                break;
            case 5:
                this.Z = this.d.q;
                this.Qb = E(this.Qb);
                break;
            case 6:
                this.Z = this.d.opacity;
                break;
            case 7:
                this.Z = 0;
                break;
            case 8:
                this.Z = this.d.x, this.He = this.d.y
        }
        this.ec = this.Z;
        this.Eg = this.He
    };
    k.Rd = function(a) {
        a %= c;
        switch (this.$l) {
            case 0:
                return Math.sin(a);
            case 1:
                return a <= d ? a / d : a <= b ? 1 - 2 * (a - d) / Math.PI : (a - b) / d - 1;
            case 2:
                return 2 * a / c - 1;
            case 3:
                return -2 * a / c + 1;
            case 4:
                return a < Math.PI ? -1 : 1
        }
        return 0
    };
    k.zb = function() {
        var a = this.b.De(this.d);
        if (this.qb && 0 !== a) {
            0 === this.Kd ?
                this.Ua = 0 : (this.Ua += a / this.Kd * c, this.Ua %= c);
            switch (this.Vg) {
                case 0:
                    this.d.x !== this.ec && (this.Z += this.d.x - this.ec);
                    this.d.x = this.Z + this.Rd(this.Ua) * this.Qb;
                    this.ec = this.d.x;
                    break;
                case 1:
                    this.d.y !== this.ec && (this.Z += this.d.y - this.ec);
                    this.d.y = this.Z + this.Rd(this.Ua) * this.Qb;
                    this.ec = this.d.y;
                    break;
                case 2:
                    this.d.width = this.Z + this.Rd(this.Ua) * this.Qb;
                    this.d.height = this.d.width * this.kh;
                    break;
                case 3:
                    this.d.width = this.Z + this.Rd(this.Ua) * this.Qb;
                    break;
                case 4:
                    this.d.height = this.Z + this.Rd(this.Ua) * this.Qb;
                    break;
                case 5:
                    this.d.q !== this.ec && (this.Z = L(this.Z + (this.d.q - this.ec)));
                    this.d.q = L(this.Z + this.Rd(this.Ua) * this.Qb);
                    this.ec = this.d.q;
                    break;
                case 6:
                    this.d.opacity = this.Z + this.Rd(this.Ua) * this.Qb / 100;
                    0 > this.d.opacity ? this.d.opacity = 0 : 1 < this.d.opacity && (this.d.opacity = 1);
                    break;
                case 8:
                    this.d.x !== this.ec && (this.Z += this.d.x - this.ec), this.d.y !== this.Eg && (this.He += this.d.y - this.Eg), this.d.x = this.Z + Math.cos(this.d.q) * this.Rd(this.Ua) * this.Qb, this.d.y = this.He + Math.sin(this.d.q) * this.Rd(this.Ua) * this.Qb, this.ec = this.d.x,
                        this.Eg = this.d.y
            }
            this.d.F()
        }
    };
    k.Tn = function(a, b) {
        switch (this.Vg) {
            case 2:
                this.Z *= b.width / a.width;
                this.kh = b.height / b.width;
                break;
            case 3:
                this.Z *= b.width / a.width;
                break;
            case 4:
                this.Z *= b.height / a.height
        }
    };
    e.n = new(r());
    e.j = new(r());
    e.Ta = new(r())
})();

function ac(e) {
    this.b = e;
    this.Hl = this.gj = this.ph = this.Gl = 0
}
(function() {
    var e = ac.prototype;
    e.ba = function(c) {
        this.J = c;
        this.b = c.b
    };
    e.ba.prototype.N = r();
    e.U = function(c, d) {
        this.type = c;
        this.J = c.J;
        this.d = d;
        this.b = c.b
    };
    var k = e.U.prototype;
    k.N = function() {
        this.enabled = 0 !== this.D[0]
    };
    k.Qa = function() {
        return {
            smg: this.J.Gl,
            ss: this.J.ph,
            se: this.J.gj,
            smd: this.J.Hl
        }
    };
    k.ab = function(c) {
        this.J.Gl = c.smg;
        this.J.ph = c.ss;
        this.J.gj = c.se;
        this.J.Hl = c.smd
    };
    k.zb = r();
    k.vh = function() {
        if (this.enabled) {
            var c = this.J.Ni.cf(),
                d = 0,
                b = 0,
                a, e, f, k = 0;
            a = 0;
            for (e = c.length; a < e; a++) {
                a: {
                    f = c[a];
                    for (var s =
                            void 0, v = void 0, m = void 0, s = 0, v = f.S.length; s < v; ++s)
                        if (m = f.S[s], m.J instanceof ac) {
                            f = m;
                            break a
                        }
                    f = null
                }
                f && f.enabled && (d += c[a].x, b += c[a].y, ++k)
            }
            c = this.d.u.wa;
            e = this.b.Ed.mb;
            f = a = 0;
            e >= this.J.ph && e < this.J.gj && (a = this.J.Gl * Math.min(this.b.$e, 1), 0 === this.J.Hl && (a *= 1 - (e - this.J.ph) / (this.J.gj - this.J.ph)), e = 2 * Math.random() * Math.PI, f = Math.random() * a, a = Math.cos(e) * f, f *= Math.sin(e));
            c.Dl(d / k + a);
            c.El(b / k + f)
        }
    };
    e.j = new(r())
})();

function Q(e) {
    this.b = e
}
(function() {
    var e = Q.prototype;
    e.ba = function(c) {
        this.J = c;
        this.b = c.b
    };
    e.ba.prototype.N = r();
    e.U = function(c, d) {
        this.type = c;
        this.J = c.J;
        this.d = d;
        this.b = c.b
    };
    var k = e.U.prototype;
    k.N = function() {
        this.d.O.ns = 0 !== this.D[0]
    };
    k.zb = r();
    e.n = new(r());
    e.j = new(r())
})();

function Rb() {
    return [null, null, [
            [Sb, !1, !0, !0, !0, !1, !1, !1, !1, !1],
            [T, !0, !1, !1, !1, !1, !1, !1, !1, !1],
            [S, !0, !1, !1, !1, !1, !1, !1, !1, !1],
            [R, !1, !0, !0, !0, !0, !0, !0, !0, !1],
            [Tb, !1, !0, !0, !0, !1, !1, !1, !1, !1],
            [Ub, !1, !0, !0, !0, !0, !0, !0, !0, !0],
            [Z, !0, !1, !1, !1, !1, !1, !1, !1, !1],
            [U, !1, !0, !0, !0, !0, !0, !0, !0, !1]
        ],
        [
            ["t0", Ub, !1, [], 0, 0, ["images/tiledbackground.png", 199947, 1], null, [], !1, !1, 7839771788376058, [], null],
            ["t1", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xac1913e986c42, [
                        ["images/playbutton-sheet1.png", 17076, 0, 0, 231, 218, 1, 0.4978354871273041,
                            2.05504584312439, [],
                            [], 1
                        ]
                    ]],
                    ["button", 5, !1, 1, 0, !1, 6323703428770813, [
                        ["images/playbutton-sheet0.png", 168, 0, 0, 250, 250, 1, 0.5, 0.5, [],
                            [], 3
                        ]
                    ]]
                ],
                [], !1, !1, 917891976360433, [], null
            ],
            ["t2", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9091816964374592, [
                        ["images/sprite-sheet0.png", 71823, 0, 0, 215, 520, 1, 0.5023255944252014, 0.5, [],
                            [-0.497674435377121, -0.4980769157409668, -0.00465160608291626, -0.2692310214042664, -0.02790659666061401, -0.282692015171051, 0.4976744055747986, 0, -0.03255859017372131, 0.2807689905166626, -0.00465160608291626,
                                0.2673079967498779, -0.497674435377121, 0.4980769753456116
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Bullet", Vb, 445519538060415]
                ], !1, !1, 0xd97c3d7bdb33b, [], null
            ],
            ["t3", U, !1, [], 0, 0, null, null, [], !1, !1, 0xb3a21e8235d43, [], null],
            ["t4", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 703682867550999, [
                        ["images/sprite3-sheet0.png", 2003, 0, 0, 32, 32, 1, -2.25, 0.53125, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 0x4dacdf8602807, [], null
            ],
            ["t5", Ub, !1, [], 0, 0, ["images/tiledbackground.png", 199947, 1], null, [], !1, !1, 9420368051106858, [], null],
            ["t6", R, !1, [], 1, 1, null, [
                    ["Default", 5, !1, 1, 0, !1, 5553199350228674, [
                        ["images/sprite10-sheet0.png", 72753, 0, 0, 246, 205, 1, 0.5, 0.502439022064209, [],
                            [], 1
                        ]
                    ]]
                ],
                [
                    ["Flash", Xb, 6382270124701057]
                ], !1, !1, 7034056164228418, [
                    ["hardlight", "HardLight"]
                ], null
            ],
            ["t7", S, !1, [], 0, 0, null, null, [], !1, !1, 9640174332345444, [], null, []],
            ["t8", T, !1, [], 0, 0, null, null, [], !1, !1, 8018977305955424, [], null, []],
            ["t9", Z, !1, [], 0, 0, null, null, [], !1, !1, 0xa0b0eb134005, [], null, [1]],
            ["t10", R, !1, [5036078706056064], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9151975426326338, [
                        ["images/lay1bg-sheet0.png",
                            158760, 0, 0, 1280, 640, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 8739381767944195, [], null
            ],
            ["t11", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6779100980286637, [
                        ["images/playbutton-sheet0.png", 168, 0, 0, 250, 250, 1, 0.5, 0.5, [],
                            [], 3
                        ]
                    ]]
                ],
                [], !1, !1, 5633880017021326, [], null
            ],
            ["t12", R, !1, [], 3, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 4933417941225408, [
                        ["images/sprite13-sheet0.png", 2025, 1, 1, 64, 64, 1, 0.5, 0.5, [],
                            [-0.21875, -0.21875, 0, -0.375, 0.234375, -0.234375, 0.203125, 0, 0.15625, 0.15625, 0, 0.40625, -0.15625, 0.15625, -0.234375, 0], 0
                        ]
                    ]],
                    ["run", 5, !1,
                        1, 0, !1, 630304641016282, [
                            ["images/sprite13-sheet0.png", 2025, 66, 1, 64, 64, 1, 0.5, 0.5, [],
                                [-0.203125, -0.203125, 0, -0.375, 0.265625, -0.265625, 0.21875, 0, 0.25, 0.25, 0, 0.328125, -0.234375, 0.234375, -0.171875, 0], 0
                            ]
                        ]
                    ],
                    ["jump", 5, !1, 1, 0, !1, 9702849363371064, [
                        ["images/sprite13-sheet0.png", 2025, 131, 1, 64, 64, 1, 0.5, 0.5, [],
                            [-0.28125, -0.28125, 0, -0.453125, 0.234375, -0.234375, 0.375, 0, 0.109375, 0.109375, 0, 0.296875, -0.15625, 0.15625, -0.359375, 0], 0
                        ]
                    ]],
                    ["slide", 5, !1, 1, 0, !1, 0xdb59b20e657a5, [
                        ["images/sprite13-sheet0.png", 2025, 1, 66, 64,
                            64, 1, 0.5, 0.5, [],
                            [-0.15625, -0.15625, 0, -0.140625, 0.078125, -0.078125, 0.328125, 0, 0.40625, 0.40625, 0, 0.5, -0.375, 0.375, -0.34375, 0], 0
                        ]
                    ]]
                ],
                [
                    ["ScrollTo", ac, 0x817650f604727],
                    ["Platform", Zb, 6838188398502113],
                    ["8Direction", Wb, 0xe16e400b1f0f6]
                ], !1, !1, 8524342112719692, [], null
            ],
            ["t13", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x86ee8c4d01e2, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 650344667238676]
                ], !1, !1, 9559010061190198, [], null
            ],
            ["t14", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9949697758419276, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 6369270199351073]
                ], !1, !1, 0x4f213c8fec6ca, [], null
            ],
            ["t15", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7469321259422731, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 425826400435109]
                ], !1, !1, 27852789029541, [], null
            ],
            ["t16", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9047428929852004, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214,
                            0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 4845422901283746]
                ], !1, !1, 0x952b1bac5f7f8, [], null
            ],
            ["t17", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9982887784490626, [
                        ["images/sprite14-sheet0.png",
                            1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0x7e97930c51d2c]
                ], !1, !1, 660630619166722, [], null
            ],
            ["t18", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x9749a6a6e4c5d, [
                        ["images/sprite19-sheet0.png", 133026, 0, 0, 640, 480, 1, 0.5, 0.5, [],
                            [-0.3062500059604645, -0.2416670024394989, 0, -0.3291670083999634, 0.231249988079071, -0.1416670083999634, 0.221875011920929, 0.1291670203208923, 0, 0.3125, -0.2984380125999451, 0.231249988079071], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0xad32a502c7b55]
                ], !1, !1, 7206678113689823, [], null
            ],
            ["t19", R, !1, [], 2, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xfd6e852700f59, [
                        ["images/evil1-sheet0.png", 839, 0, 0, 64, 96, 1, 0.5, 0.5, [],
                            [-0.0625, -0.2083329856395721, 0, -0.125, -0.03125, -0.1458329856395721,
                                0.21875, 0, 0.375, 0.4166669845581055, 0, 0.46875, -0.328125, 0.3854169845581055, -0.21875, 0
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0xf08f41543629f],
                    ["Sine", $b, 8009076063107674]
                ], !1, !1, 8185676287820233, [], null
            ],
            ["t20", Sb, !1, [], 0, 0, null, null, [], !1, !1, 7551576431484491, [], null],
            ["t21", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xcd7337bad03c, [
                        ["images/pausebutton-sheet0.png", 791, 0, 0, 64, 64, 1, 0.5, 0.5, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 7910580373361222, [], null
            ],
            ["t22", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5433511353991149, [
                        ["images/sprite24-sheet0.png",
                            57112, 0, 0, 339, 510, 1, 0.501474916934967, 0.5, [],
                            [-0.002949923276901245, -0.1176469922065735, -0.03834792971611023, -0.1431370079517365, 0.1533920764923096, 0, 0.09439510107040405, 0.2313730120658875, -0.002949923276901245, 0.2196080088615418, -0.2949849367141724, 0.3627449870109558, -0.3805309236049652, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Bullet", Vb, 0x637f85447e591]
                ], !1, !1, 0x9f71e8eb8e89b, [], null
            ],
            ["t23", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 797122042088288, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 5172959739064729]
                ], !1, !1, 8592724501703092, [], null
            ],
            ["t24", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 844307168979916, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161,
                            39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 4635955951342262]
                ], !1, !1, 4777923410986317, [], null
            ],
            ["t25", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x5ea4968f01be3, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 6915036047903289]
                ], !1, !1, 6542837050423997, [], null
            ],
            ["t26", R, !1, [], 1, 0,
                null, [
                    ["Default", 5, !1, 1, 0, !1, 7425468057959658, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0xa7bc9a8671453]
                ], !1, !1,
                9032108941177056, [], null
            ],
            ["t27", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5832595420631386, [
                        ["images/sprite26-sheet0.png", 858069, 0, 0, 1001, 755, 1, 0.5004994869232178, 0.5006622672080994, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 844843545840827, [], null
            ],
            ["t28", R, !1, [0x6927ce0618bed], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7470602313098227, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214,
                                1.885713815689087, 0.03333333507180214, 1.857142925262451, 0.6666663885116577, 1.057142853736877, 0.0666666328907013, 1.057142853736877, 0.7333333492279053, 1.057142853736877, 0.03333333507180214
                            ], 0
                        ]
                    ]]
                ],
                [], !1, !1, 4557729111430029, [], null
            ],
            ["t29", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5384313021293839, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214, 1.885713815689087,
                                0.03333333507180214, 1.857142925262451, 0.6666663885116577, 1.057142853736877, 0.0666666328907013, 1.057142853736877, 0.7333333492279053, 1.057142853736877, 0.03333333507180214
                            ], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xdfb2f30d44eae, [], null
            ],
            ["t30", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x6981dc49c2756, [
                        ["images/lay1bg-sheet0.png", 158760, 0, 0, 1280, 640, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 8914924423756168, [], null
            ],
            ["t31", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xb51cf05191eae, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214, 1.885713815689087, 0.03333333507180214, 1.857142925262451, 0.6666663885116577, 1.057142853736877, 0.0666666328907013, 1.057142853736877, 0.7333333492279053, 1.057142853736877, 0.03333333507180214], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x5ff7688daf3f6, [], null
            ],
            ["t32", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6810346307437496, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214, 1.885713815689087, 0.03333333507180214, 1.857142925262451, 0.6666663885116577, 1.057142853736877, 0.0666666328907013, 1.057142853736877, 0.7333333492279053, 1.057142853736877, 0.03333333507180214], 0
                        ]
                    ]]
                ],
                [], !1, !1, 7344210834879706, [], null
            ],
            ["t33", U, !1, [], 1, 0, null, null, [
                ["Pin", Yb, 7193557420878642]
            ], !1, !1, 0xb6cf339d32929, [], null],
            ["t34", Ub, !1, [], 0, 0, ["images/tiledbackground3.png", 681, 0], null, [], !1, !1, 0xce0a5bdeeb513, [], null],
            ["t35", U, !1, [], 0, 0, null, null, [], !1, !1, 8436742199854469, [], null],
            ["t36", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 4518171164605974, [
                        ["images/sprite32-sheet0.png", 657, 0, 0, 109, 101, 1, 0.7981651425361633, -1.386138558387756, [],
                            [-0.7981651425361633, 1.386138558387756, -1.192092895507813E-7, 1.386138558387756, 0.2018348574638367, 1.386138558387756, 0.2018348574638367, 1.386138558387756, 0.2018348574638367, 1.386138558387756, -1.192092895507813E-7, 2.306930541992188, -0.7981651425361633, 2.346534490585327, -0.7981651425361633, 1.386138558387756], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x47db5e7b4730d, [], null
            ],
            ["t37", U, !1, [], 0, 0, null, null, [], !1, !1, 0xa707a7ac11363, [], null],
            ["t38", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xe099504370776, [
                        ["images/sprite-sheet0.png", 71823, 0, 0, 215, 520, 1, 0.5023255944252014, 0.5, [],
                            [0.4976744055747986, 0, -0.03255859017372131, 0.2807689905166626, 4.172325134277344E-7, 0.2673079967498779, -0.4976744055747986, 0.4980769753456116, -0.4976744055747986, -0.4980769157409668, 4.172325134277344E-7, -0.2692310214042664, -0.02790659666061401, -0.282692015171051], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x93c2d2738332f, [], null
            ],
            ["t39", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9793265632000608, [
                        ["images/sprite32-sheet0.png", 657, 0, 0, 109, 101, 1, 0.7981651425361633, -1.386138558387756, [],
                            [-0.7981651425361633, 1.386138558387756, -1.192092895507813E-7, 1.386138558387756, 0.2018348574638367, 1.386138558387756, 0.2018348574638367, 1.386138558387756, 0.2018348574638367, 1.386138558387756, -1.192092895507813E-7, 2.306930541992188, -0.7981651425361633, 2.346534490585327, -0.7981651425361633, 1.386138558387756], 0
                        ]
                    ]]
                ],
                [], !1, !1, 7233181721180031, [], null
            ],
            ["t40", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xedf4bc50c216d, [
                        ["images/playagainarrow-sheet0.png", 70960, 0, 0, 215, 520, 1, 0.4976744055747986, 0.5, [],
                            [0.02790659666061401, -0.282692015171051, -4.172325134277344E-7, -0.2692310214042664, 0.4976745843887329, -0.4980769157409668, 0.4976745843887329, 0.4980769753456116, -4.172325134277344E-7, 0.2673079967498779, 0.0325586199760437, 0.2807689905166626, -0.4976744055747986, 0], 0
                        ]
                    ]]
                ],
                [], !1, !1,
                0x88ff2fc288d8b, [], null
            ],
            ["t41", U, !1, [], 0, 0, null, null, [], !1, !1, 6696028860433244, [], null],
            ["t42", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xa685db91b9d29, [
                        ["images/playbutton-sheet0.png", 168, 0, 0, 250, 250, 1, 0.5, 0.5, [],
                            [], 3
                        ]
                    ]]
                ],
                [], !1, !1, 560259860134327, [], null
            ],
            ["t43", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 8441352568917679, [
                        ["images/sprite19-sheet0.png", 133026, 0, 0, 640, 480, 1, 0.5, 0.5, [],
                            [-0.3062500059604645, -0.2416670024394989, 0, -0.3291670083999634, 0.231249988079071, -0.1416670083999634, 0.221875011920929,
                                0.1291670203208923, 0, 0.3125, -0.2984380125999451, 0.231249988079071
                            ], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x6b569f1396fdd, [], null
            ],
            ["t44", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6122574892110708, [
                        ["images/frontpagewoodens2-sheet0.png", 134233, 0, 0, 640, 480, 1, 0.5, 0.5, [],
                            [0.2984380125999451, 0.231249988079071, 0, 0.3125, -0.221875011920929, 0.1291670203208923, -0.231249988079071, -0.1416670083999634, 0, -0.3291670083999634, 0.3062499761581421, -0.2416670024394989], 0
                        ]
                    ]]
                ],
                [], !1, !1, 421616509059868, [], null
            ],
            ["t45", R, !1, [], 0, 0, null, [
                    ["Default",
                        5, !1, 1, 0, !1, 0xf95c30643cff9, [
                            ["images/levelcompletearrow-sheet0.png", 118931, 0, 0, 510, 510, 1, 0.5, 0.5, [],
                                [-0.3568630218505859, -0.3568630218505859, 0, -0.5, 0.3901960253715515, -0.3901959955692291, 0.5, 0, 0.3568630218505859, 0.3568630218505859, 0, 0.5, -0.3568630218505859, 0.3568630218505859, -0.5, 0], 0
                            ]
                        ]
                    ]
                ],
                [], !1, !1, 0xcac2c07accd13, [], null
            ],
            ["t46", Ub, !1, [], 0, 0, ["images/tiledbackground4.png", 158773, 1], null, [], !1, !1, 0xddfb3e52d732a, [], null],
            ["t47", U, !1, [], 0, 0, null, null, [], !1, !1, 0x54bcf9b052e59, [], null],
            ["t48", R, !1, [],
                0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xbb5ea7b7704c7, [
                        ["images/sprite36-sheet0.png", 3897, 0, 0, 448, 192, 1, 0.5, 0.5, [],
                            [-0.3303570151329041, -0.1041670143604279, 0, -0.34375, 0.3236610293388367, -0.08854201436042786, 0.359375, 0, 0.5, 0.5, 0, -0.1822920143604279, -0.3325890004634857, 0.109375, -0.3683040142059326, 0], 0
                        ]
                    ]]
                ],
                [], !1, !1, 8960241972725317, [], null
            ],
            ["t49", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 88231433303335, [
                        ["images/sprite37-sheet0.png", 669, 0, 0, 127, 65, 1, 0.4881889820098877, 1.246153831481934, [],
                            [0.5039370059967041, -1.230769276618958, 0.5039370059967041, -0.2461538314819336, 0.2519680261611939, -0.2461538314819336, 2.980232238769531E-8, -0.2461538314819336, -0.2519689798355103, -0.2461538314819336, -0.4881889820098877, -0.2461538314819336, -0.4881889820098877, -1.230769276618958], 0
                        ]
                    ]]
                ],
                [], !1, !1, 5730941321770409, [], null
            ],
            ["t50", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xa471a0fb14dfc, [
                        ["images/nextsteparrow-sheet0.png", 71838, 0, 0, 215, 520, 1, 0.5023255944252014, 0.5, [],
                            [-0.497674435377121, -0.4980769157409668, -0.00465160608291626, -0.2692310214042664, -0.02790659666061401, -0.282692015171051, 0.4976744055747986, 0, -0.03255859017372131, 0.2807689905166626, -0.00465160608291626, 0.2673079967498779, -0.497674435377121, 0.4980769753456116], 0
                        ]
                    ]]
                ],
                [], !1, !1, 9206668981889848, [], null
            ],
            ["t51", U, !1, [], 0, 0, null, null, [], !1, !1, 628677489203191, [], null],
            ["t52", U, !1, [], 0, 0, null, null, [], !1, !1, 5105494752545231, [], null],
            ["t53", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9115463737449272, [
                        ["images/nextstepquitarrow-sheet0.png", 70980, 0, 0, 215, 520, 1, 0.4976744055747986,
                            0.5, [],
                            [0.4976745843887329, 0.4980769753456116, 0.00465160608291626, 0.2673079967498779, 0.0325586199760437, 0.2807689905166626, -0.4976744055747986, 0, 0.02790659666061401, -0.282692015171051, 0.00465160608291626, -0.2692310214042664, 0.4976745843887329, -0.4980769157409668], 0
                        ]
                    ]]
                ],
                [], !1, !1, 6010026576397489, [], null
            ],
            ["t54", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xdd242dc9afdb2, [
                        ["images/level1cpmplete-sheet0.png", 32607, 0, 0, 128, 128, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 0x8cbc789b44339, [], null
            ],
            ["t55", R, !1, [0x6dd0ffe67aae5],
                0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9919025644049926, [
                        ["images/lay1bg-sheet0.png", 158760, 0, 0, 1280, 640, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 8922288911226886, [], null
            ],
            ["t56", R, !1, [9822847481896684], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x590d7a1f3acae, [
                        ["images/lay1bg-sheet0.png", 158760, 0, 0, 1280, 640, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 7495283286856125, [], null
            ],
            ["t57", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 373394739598577, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 311021054289263]
                ], !1, !1, 0xc7d50f7f8e85d, [], null
            ],
            ["t58", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 4961889230639427, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214,
                            0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0x5a28a79dbe0f0]
                ], !1, !1, 0x39652a834e6ba, [], null
            ],
            ["t59", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xab198df059a07, [
                        ["images/sprite14-sheet0.png",
                            1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0x62417f9742d5b]
                ], !1, !1, 4938615883499126, [], null
            ],
            ["t60", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xe20eafa6dc565, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 6123698275270871]
                ], !1, !1, 8258897682062615, [], null
            ],
            ["t61", R, !1, [], 1, 0,
                null, [
                    ["Default", 5, !1, 1, 0, !1, 7472914612833129, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 9093100343597012]
                ], !1, !1,
                9079335989574716, [], null
            ],
            ["t62", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5451257007177812, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7],
                            0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 7600711227069016]
                ], !1, !1, 9339928162305432, [], null
            ],
            ["t63", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x7426d4096323d, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 7355660621281004]
                ], !1, !1, 9620238544988486, [], null
            ],
            ["t64", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 8823670949910067, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 692739868946237]
                ], !1, !1, 9203278562368808, [], null
            ],
            ["t65", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7910897738645487, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0xfdcb83c27fdb2]
                ], !1, !1, 9525109669793852, [], null
            ],
            ["t66", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x417b50c0eeb27, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214, 1.885713815689087, 0.03333333507180214, 1.857142925262451,
                                0.6666663885116577, 1.057142853736877, 0.0666666328907013, 1.057142853736877, 0.7333333492279053, 1.057142853736877, 0.03333333507180214
                            ], 0
                        ]
                    ]]
                ],
                [], !1, !1, 5005634734701761, [], null
            ],
            ["t67", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x6326a46ad1da9, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214, 1.885713815689087, 0.03333333507180214, 1.857142925262451, 0.6666663885116577,
                                1.057142853736877, 0.0666666328907013, 1.057142853736877, 0.7333333492279053, 1.057142853736877, 0.03333333507180214
                            ], 0
                        ]
                    ]]
                ],
                [], !1, !1, 7176725348215851, [], null
            ],
            ["t68", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6327391747384773, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214, 1.885713815689087, 0.03333333507180214, 1.857142925262451, 0.6666663885116577, 1.057142853736877,
                                0.0666666328907013, 1.057142853736877, 0.7333333492279053, 1.057142853736877, 0.03333333507180214
                            ], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x4b1522757f6ca, [], null
            ],
            ["t69", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9120789612647784, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214, 1.885713815689087, 0.03333333507180214, 1.857142925262451, 0.6666663885116577, 1.057142853736877, 0.0666666328907013,
                                1.057142853736877, 0.7333333492279053, 1.057142853736877, 0.03333333507180214
                            ], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xd6a40fb34d0e8, [], null
            ],
            ["t70", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5312386944319162, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, -1.057142853736877, -0.03333333507180214, [],
                            [1.057142853736877, 0.03333333507180214, 1.057142853736877, 0.03333333507180214, 2.057142734527588, 0.03333333507180214, 1.885713815689087, 0.03333333507180214, 1.857142925262451, 0.6666663885116577, 1.057142853736877, 0.0666666328907013, 1.057142853736877,
                                0.7333333492279053, 1.057142853736877, 0.03333333507180214
                            ], 0
                        ]
                    ]]
                ],
                [], !1, !1, 328252615867035, [], null
            ],
            ["t71", R, !1, [], 2, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x65cbb372e1b78, [
                        ["images/evil1-sheet0.png", 839, 0, 0, 64, 96, 1, 0.5, 0.5, [],
                            [-0.0625, -0.2083329856395721, 0, -0.125, -0.03125, -0.1458329856395721, 0.21875, 0, 0.375, 0.4166669845581055, 0, 0.46875, -0.328125, 0.3854169845581055, -0.21875, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 5184427183317441],
                    ["Sine", $b, 7499222434480601]
                ], !1, !1, 9396807874586828, [], null
            ],
            ["t72", R, !1, [], 2, 0, null, [
                    ["Default",
                        5, !1, 1, 0, !1, 9323476809780426, [
                            ["images/evil1-sheet0.png", 839, 0, 0, 64, 96, 1, 0.5, 0.5, [],
                                [-0.0625, -0.2083329856395721, 0, -0.125, -0.03125, -0.1458329856395721, 0.21875, 0, 0.375, 0.4166669845581055, 0, 0.46875, -0.328125, 0.3854169845581055, -0.21875, 0], 0
                            ]
                        ]
                    ]
                ],
                [
                    ["Solid", Q, 6110472927237528],
                    ["Sine", $b, 8213070271147916]
                ], !1, !1, 392544207357108, [], null
            ],
            ["t73", R, !1, [], 2, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5203284840920673, [
                        ["images/evil1-sheet0.png", 839, 0, 0, 64, 96, 1, 0.5, 0.5, [],
                            [-0.0625, -0.2083329856395721, 0, -0.125, -0.03125, -0.1458329856395721, 0.21875, 0, 0.375, 0.4166669845581055, 0, 0.46875, -0.328125, 0.3854169845581055, -0.21875, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0x41de7c4b7a856],
                    ["Sine", $b, 0xb8cddbbd76d81]
                ], !1, !1, 0x497076e387297, [], null
            ],
            ["t74", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6500460966238405, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7,
                                0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 5885060308553429]
                ], !1, !1, 0x9d87895e1ed57, [], null
            ],
            ["t75", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9743015682143196, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711,
                                0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 8766971518577332]
                ], !1, !1, 4525661285036954, [], null
            ],
            ["t76", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7521412018878365, [
                        ["images/uparrowtouch-sheet0.png", 1098, 0, 0, 106, 103, 1, 2.49056601524353, 1.029126167297363, [],
                            [], 0
                        ]
                    ]]
                ],
                [
                    ["Pin", Yb, 4513341085611277]
                ], !1, !1, 8239434757988906, [], null
            ],
            ["t77",
                R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x621fc94d67112, [
                        ["images/uparrowtouch-sheet0.png", 1098, 0, 0, 106, 103, 1, 2.49056601524353, 1.029126167297363, [],
                            [], 0
                        ]
                    ]]
                ],
                [
                    ["Pin", Yb, 0xdf5a800859631]
                ], !1, !1, 4563445183036643, [], null
            ],
            ["t78", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xdd5d070db243a, [
                        ["images/uparrowtouch-sheet0.png", 1098, 0, 0, 106, 103, 1, 2.49056601524353, 1.029126167297363, [],
                            [], 0
                        ]
                    ]]
                ],
                [
                    ["Pin", Yb, 371154562507486]
                ], !1, !1, 768915835491631, [], null
            ],
            ["t79", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x68c6ace99636, [
                        ["images/touchbullet-sheet0.png", 1763, 0, 0, 33, 32, 1, -0.4545454680919647, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [
                    ["Pin", Yb, 0x7cf958c2140db]
                ], !1, !1, 5007215134565627, [], null
            ],
            ["t80", Ub, !1, [], 0, 0, ["images/tiledbackground6.png", 378316, 1], null, [], !1, !1, 0x896664abde393, [], null],
            ["t81", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5581146254618502, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406,
                                0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 6241752216387667]
                ], !1, !1, 0xa361fc38f560c, [], null
            ],
            ["t82", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x57011f380e9dd, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 5302146593975221]
                ], !1, !1, 8104698754779484, [], null
            ],
            ["t83", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7187816311697646, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0x91f82f60f3f4a]
                ], !1, !1, 0xfe582447bf955, [], null
            ],
            ["t84", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6551835977141055, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94,
                            43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 7892499310817404]
                ], !1, !1, 0x8fa0b4af9e757, [], null
            ],
            ["t85", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x7df474833ecc3, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406,
                                0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 5074606924722605]
                ], !1, !1, 0xb9e56cdce96bf, [], null
            ],
            ["t86", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7896090893746778, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406], 0
                        ]
                    ]]
                ],
                [
                    ["Solid",
                        Q, 9467502543912454
                    ]
                ], !1, !1, 7554552337983309, [], null
            ],
            ["t87", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x4effd87bcd1da, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0xe8ba0fa1a99cf]
                ], !1, !1, 9923135308251164, [], null
            ],
            ["t88", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 979689704410391, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 6729948456668024]
                ], !1, !1, 9755541903859840, [], null
            ],
            ["t89", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7973529449013175, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406,
                                1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0xe312b0cfbced3]
                ], !1, !1, 8324508875198632, [], null
            ],
            ["t90", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7744564771585218, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406,
                                0, -6.627906799316406
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0x5e84a6a607627]
                ], !1, !1, 0xa39271940002, [], null
            ],
            ["t91", R, !1, [], 2, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6024179650384746, [
                        ["images/level2evil-sheet0.png", 771, 0, 0, 128, 96, 1, 0.5, 0.5, [],
                            [0.1328129768371582, 0.34375, 0.2734379768371582, -0.1979170143604279, 0.4453129768371582, 0, 0.4765629768371582, 0.46875, 0.0546879768371582, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 8027269313222852],
                    ["Sine", $b, 8342379870846417]
                ], !1, !1, 0x6d555385d9f5a, [], null
            ],
            ["t92", R, !1, [], 2, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5031396343060895, [
                        ["images/level2evil-sheet0.png", 771, 0, 0, 128, 96, 1, 0.5, 0.5, [],
                            [0.1328129768371582, 0.34375, 0.2734379768371582, -0.1979170143604279, 0.4453129768371582, 0, 0.4765629768371582, 0.46875, 0.0546879768371582, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 725958287359275],
                    ["Sine", $b, 6427240234351185]
                ], !1, !1, 6144735969810993, [], null
            ],
            ["t93", R, !1, [], 2, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xb53751f81b7f9, [
                        ["images/level2evil-sheet0.png", 771, 0, 0, 128, 96, 1, 0.5, 0.5, [],
                            [0.1328129768371582, 0.34375, 0.2734379768371582, -0.1979170143604279, 0.4453129768371582,
                                0, 0.4765629768371582, 0.46875, 0.0546879768371582, 0
                            ], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0xa245932d6c89b],
                    ["Sine", $b, 6419084460487192]
                ], !1, !1, 6555069151138974, [], null
            ],
            ["t94", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 4792335350676131, [
                        ["images/sprite5-sheet0.png", 743, 0, 0, 94, 43, 1, 0, 7.627906799316406, [],
                            [0, -7.627906799316406, 0, -7.627906799316406, 1, -7.627906799316406, 1, -6.627906799316406, 0.6808509826660156, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406, 0, -6.627906799316406], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 9744081313041628]
                ], !1, !1, 0x85619e6a8556b, [], null
            ],
            ["t95", R, !1, [], 2, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xb8e10a86192ff, [
                        ["images/sprite13-sheet0.png", 2025, 1, 1, 64, 64, 1, 0.5, 0.5, [],
                            [-0.21875, -0.21875, 0, -0.375, 0.234375, -0.234375, 0.203125, 0, 0.15625, 0.15625, 0, 0.40625, -0.15625, 0.15625, -0.234375, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Platform", Zb, 8708134887545398],
                    ["ScrollTo", ac, 4590752663131593]
                ], !1, !1, 5147858409183028, [], null
            ],
            ["t96", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xb24ed6143ad37, [
                        ["images/sprite19-sheet0.png", 133026, 0, 0, 640, 480, 1, 0.5, 0.5, [],
                            [-0.3062500059604645, -0.2416670024394989, 0, -0.3291670083999634, 0.231249988079071, -0.1416670083999634, 0.221875011920929, 0.1291670203208923, 0, 0.3125, -0.2984380125999451, 0.231249988079071], 0
                        ]
                    ]]
                ],
                [
                    ["Solid", Q, 0xcad04f136f277]
                ], !1, !1, 0xbf79b46c6d552, [], null
            ],
            ["t97", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x6e1c56158201c, [
                        ["images/sprite51-sheet0.png", 859120, 0, 0, 1001, 755, 1, 0.5004994869232178, 0.5006622672080994, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 4636929499217178, [], null
            ],
            ["t98", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1,
                        7437094576476528, [
                            ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, -0.7111111283302307, 0.8918918967247009, [],
                                [0.7111111283302307, -0.7297298908233643, 0.7111111283302307, -0.8108108043670654, 1.666667103767395, -0.8108108043670654, 1.466667175292969, 1.192092895507813E-7, 1.444444179534912, 0.1081081032752991, 0.7111111283302307, 0.05405408143997192, 0.7111111283302307, 0.1081081032752991, 0.7111111283302307, 1.192092895507813E-7], 0
                            ]
                        ]
                    ]
                ],
                [], !1, !1, 0xa0f272ca58625, [], null
            ],
            ["t99", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5818509971455389, [
                        ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, -0.7111111283302307, 0.8918918967247009, [],
                            [0.7111111283302307, -0.7297298908233643, 0.7111111283302307, -0.8108108043670654, 1.666667103767395, -0.8108108043670654, 1.466667175292969, 1.192092895507813E-7, 1.444444179534912, 0.1081081032752991, 0.7111111283302307, 0.05405408143997192, 0.7111111283302307, 0.1081081032752991, 0.7111111283302307, 1.192092895507813E-7], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xfba60e4d4fa7, [], null
            ],
            ["t100", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1,
                        1, 0, !1, 4527356180977281, [
                            ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, -0.7111111283302307, 0.8918918967247009, [],
                                [0.7111111283302307, -0.7297298908233643, 0.7111111283302307, -0.8108108043670654, 1.666667103767395, -0.8108108043670654, 1.466667175292969, 1.192092895507813E-7, 1.444444179534912, 0.1081081032752991, 0.7111111283302307, 0.05405408143997192, 0.7111111283302307, 0.1081081032752991, 0.7111111283302307, 1.192092895507813E-7], 0
                            ]
                        ]
                    ]
                ],
                [], !1, !1, 0xaef754647fcc5, [], null
            ],
            ["t101", R, !1, [], 0, 0, null, [
                    ["Default",
                        5, !1, 1, 0, !1, 4991175081693846, [
                            ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, -0.7111111283302307, 0.8918918967247009, [],
                                [0.7111111283302307, -0.7297298908233643, 0.7111111283302307, -0.8108108043670654, 1.666667103767395, -0.8108108043670654, 1.466667175292969, 1.192092895507813E-7, 1.444444179534912, 0.1081081032752991, 0.7111111283302307, 0.05405408143997192, 0.7111111283302307, 0.1081081032752991, 0.7111111283302307, 1.192092895507813E-7], 0
                            ]
                        ]
                    ]
                ],
                [], !1, !1, 0x470096c10d868, [], null
            ],
            ["t102", R, !1, [], 0, 0, null, [
                    ["Default",
                        5, !1, 1, 0, !1, 0xe07b7aac3da63, [
                            ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, -0.7111111283302307, 0.8918918967247009, [],
                                [0.7111111283302307, -0.7297298908233643, 0.7111111283302307, -0.8108108043670654, 1.666667103767395, -0.8108108043670654, 1.466667175292969, 1.192092895507813E-7, 1.444444179534912, 0.1081081032752991, 0.7111111283302307, 0.05405408143997192, 0.7111111283302307, 0.1081081032752991, 0.7111111283302307, 1.192092895507813E-7], 0
                            ]
                        ]
                    ]
                ],
                [], !1, !1, 5482196200982651, [], null
            ],
            ["t103", U, !1, [], 0, 0, null, null, [], !1, !1, 0xc553b8d3f2a9b, [], null],
            ["t104", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x64320deea00b6, [
                        ["images/level1cpmplete-sheet0.png", 32607, 0, 0, 128, 128, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 767660329966066, [], null
            ],
            ["t105", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6954868407071556, [
                        ["images/destroy-sheet0.png", 2486, 0, 0, 384, 128, 1, 0.5, 0.5, [],
                            [0.5, -0.5, 0.5, 0, 0.4166669845581055, 0.25, 0, 0, -0.3333330154418945, 0, -0.3333330154418945, 0, -0.5, -0.5], 0
                        ]
                    ]]
                ],
                [], !1, !1, 6924584739857888, [], null
            ],
            ["t106", Sb, !1, [], 0, 0, null, null, [], !1, !1, 9132947750597312, [], null],
            ["t107", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9328805808282238, [
                        ["images/playbutton-sheet1.png", 17076, 0, 0, 231, 218, 1, 0.5021644830703735, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 7524765869108821, [], null
            ],
            ["t108", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xb8a1a1cf86c59, [
                        ["images/playbutton-sheet1.png", 17076, 0, 0, 231, 218, 1, 0.5021644830703735, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 8101403264427991, [], null
            ],
            ["t109", U, !1, [], 0, 0, null, null, [], !1, !1, 0x5ddcee813c468, [], null],
            ["t110", U, !1, [], 0, 0, null,
                null, [], !1, !1, 6161398114444781, [], null
            ],
            ["t111", Ub, !1, [], 0, 0, ["images/tiledbackground7.png", 437007, 0], null, [], !1, !1, 7769708436665539, [], null],
            ["t112", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 8009625302645994, [
                        ["images/sprite58-sheet0.png", 68924, 0, 0, 246, 205, 1, 0.5, 0.502439022064209, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 0xef6589e079e20, [], null
            ],
            ["t113", U, !1, [], 0, 0, null, null, [], !1, !1, 5566870049528928, [], null],
            ["t114", U, !1, [], 0, 0, null, null, [], !1, !1, 0xfd36447ea9f87, [], null],
            ["t115", U, !1, [], 0, 0, null, null, [], !1, !1, 7145401456338267, [], null],
            ["t116", U, !1, [], 0, 0, null, null, [], !1, !1, 0xb3c91ea1fede6, [], null],
            ["t117", U, !1, [], 0, 0, null, null, [], !1, !1, 6074640251456926, [], null],
            ["t118", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xb667cbedaf56d, [
                        ["images/playbutton-sheet1.png", 17076, 0, 0, 231, 218, 1, 0.5021644830703735, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 5198315965316484, [], null
            ],
            ["t119", U, !1, [], 0, 0, null, null, [], !1, !1, 5474309940238118, [], null],
            ["t120", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 4964785707169608, [
                        ["images/playbutton-sheet1.png", 17076, 0, 0, 231,
                            218, 1, 0.5021644830703735, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 6624055245021099, [], null
            ],
            ["t121", U, !1, [], 0, 0, null, null, [], !1, !1, 0xba6e75121b37a, [], null],
            ["t122", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5655228010493152, [
                        ["images/playbutton-sheet1.png", 17076, 0, 0, 231, 218, 1, 0.5021644830703735, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 8204221304397383, [], null
            ],
            ["t123", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 668903442901, [
                        ["images/playbutton-sheet1.png", 17076, 0, 0, 231, 218, 1, 0.5021644830703735, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 7898194927994012, [], null
            ],
            ["t124", U, !1, [], 0, 0, null, null, [], !1, !1, 0xb11aece180e1b, [], null],
            ["t125", U, !1, [], 0, 0, null, null, [], !1, !1, 0xdc13f1953cbfd, [], null],
            ["t126", Tb, !1, [], 0, 0, null, null, [], !1, !1, 6709406701718114, [], null],
            ["t127", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9703402845162236, [
                        ["images/uparrowtouch-sheet0.png", 1098, 0, 0, 106, 103, 1, 2.49056601524353, 1.029126167297363, [],
                            [], 0
                        ]
                    ]]
                ],
                [
                    ["Pin", Yb, 8003969086328851]
                ], !1, !1, 6939789814010034, [], null
            ],
            ["t128", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x5f32ff0bc700d, [
                        ["images/touchbullet2-sheet0.png",
                            1743, 0, 0, 32, 31, 1, -0.5, 0.5161290168762207, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 8804109047057943, [], null
            ],
            ["t129", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xee85e45de71f0, [
                        ["images/arrowleft2touch-sheet0.png", 1103, 0, 0, 103, 106, 1, 0.5048543810844421, 0.5, [],
                            [-0.4368931651115418, 0.4339619874954224, -0.485436886548996, 0, -0.4077669978141785, -0.4056603908538818, -0.009708374738693237, -0.4433962106704712, 0.4077666401863098, -0.4150943160057068, 0.4854366183280945, 0, 0.4368936419487, 0.4433959722518921, -0.009708374738693237, 0.5],
                            0
                        ]
                    ]]
                ],
                [], !1, !1, 5814896526435912, [], null
            ],
            ["t130", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xa4e297c3a28af, [
                        ["images/uparrow2touch-sheet0.png", 1098, 0, 0, 106, 103, 1, 0.5, 0.5048543810844421, [],
                            [-0.4339622855186462, -0.4368931651115418, 0, -0.485436886548996, 0.4056599736213684, -0.4077669978141785, 0.4433959722518921, -0.009708374738693237, 0.4150940179824829, 0.4077666401863098, 0, 0.4854366183280945, -0.4433962106704712, 0.4368936419487, -0.5, -0.009708374738693237], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x40115029fc918, [], null
            ],
            ["t131", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7859836228660271, [
                        ["images/rightarrow2touch-sheet0.png", 1110, 0, 0, 103, 106, 1, 0.4951456189155579, 0.5, [],
                            [0.4368934035301209, -0.4339622855186462, 0.4854373931884766, 0, 0.4077673554420471, 0.4056599736213684, 0.009708404541015625, 0.4433959722518921, -0.4077670276165009, 0.4150940179824829, -0.4854368567466736, 0, -0.436893105506897, -0.4433962106704712, 0.009708404541015625, -0.5], 0
                        ]
                    ]]
                ],
                [], !1, !1, 6169629414952499, [], null
            ],
            ["t132", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 8814155846203317, [
                        ["images/sprite19-sheet0.png", 133026, 0, 0, 640, 480, 1, 0.5, 0.5, [],
                            [-0.3062500059604645, -0.2416670024394989, 0, -0.3291670083999634, 0.231249988079071, -0.1416670083999634, 0.221875011920929, 0.1291670203208923, 0, 0.3125, -0.2984380125999451, 0.231249988079071], 0
                        ]
                    ]]
                ],
                [], !1, !1, 8583226253703859, [], null
            ],
            ["t133", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6410522934388142, [
                        ["images/sprite62-sheet0.png", 19314, 0, 0, 111, 97, 1, 3.828828811645508, 3.690721750259399, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 0xa851a321dca92, [], null
            ],
            ["t134", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 4832157527850652, [
                        ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, 0.5111111402511597, 0.5135135054588318, [],
                            [-0.4000001549720764, -0.3783785104751587, -0.0222221314907074, -0.2972975075244904, 0.422221839427948, -0.4324324131011963, 0.3555558323860169, 0.3243244886398315, -0.0222221314907074, 0.3243244886398315, -0.3111111521720886, 0.2432435154914856, -0.3111111521720886, -0.02702751755714417], 0
                        ]
                    ]]
                ],
                [], !1, !1, 9992796757587296, [], null
            ],
            ["t135", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1,
                        1, 0, !1, 9246549524447252, [
                            ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, 0.5111111402511597, 0.5135135054588318, [],
                                [-0.4000001549720764, -0.3783785104751587, -0.0222221314907074, -0.2972975075244904, 0.422221839427948, -0.4324324131011963, 0.3555558323860169, 0.3243244886398315, -0.0222221314907074, 0.3243244886398315, -0.3111111521720886, 0.2432435154914856, -0.3111111521720886, -0.02702751755714417], 0
                            ]
                        ]
                    ]
                ],
                [], !1, !1, 0x991349644319b, [], null
            ],
            ["t136", Ub, !1, [], 0, 0, ["images/tiledbackground7.png", 437007, 0], null, [], !1, !1, 7852879378964426, [], null],
            ["t137", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x95c0722020d0f, [
                        ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, 0.5111111402511597, 0.5135135054588318, [],
                            [-0.4000001549720764, -0.3783785104751587, -0.0222221314907074, -0.2972975075244904, 0.422221839427948, -0.4324324131011963, 0.3555558323860169, 0.3243244886398315, -0.0222221314907074, 0.3243244886398315, -0.3111111521720886, 0.2432435154914856, -0.3111111521720886, -0.02702751755714417], 0
                        ]
                    ]]
                ],
                [], !1, !1, 8101111157881856, [], null
            ],
            ["t138",
                R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7862060272189962, [
                        ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, 0.5111111402511597, 0.5135135054588318, [],
                            [-0.4000001549720764, -0.3783785104751587, -0.0222221314907074, -0.2972975075244904, 0.422221839427948, -0.4324324131011963, 0.3555558323860169, 0.3243244886398315, -0.0222221314907074, 0.3243244886398315, -0.3111111521720886, 0.2432435154914856, -0.3111111521720886, -0.02702751755714417], 0
                        ]
                    ]]
                ],
                [], !1, !1, 7454261459935872, [], null
            ],
            ["t139", R, !1, [], 0, 0, null, [
                    ["Default",
                        5, !1, 1, 0, !1, 5003075458706089, [
                            ["images/sprite52-sheet0.png", 374, 0, 0, 45, 37, 1, 0.5111111402511597, 0.5135135054588318, [],
                                [-0.4000001549720764, -0.3783785104751587, -0.0222221314907074, -0.2972975075244904, 0.422221839427948, -0.4324324131011963, 0.3555558323860169, 0.3243244886398315, -0.0222221314907074, 0.3243244886398315, -0.3111111521720886, 0.2432435154914856, -0.3111111521720886, -0.02702751755714417], 0
                            ]
                        ]
                    ]
                ],
                [], !1, !1, 8628192006257895, [], null
            ],
            ["t140", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x524ed3164437a, [
                        ["images/sprite52-sheet0.png",
                            374, 0, 0, 45, 37, 1, 0.5111111402511597, 0.5135135054588318, [],
                            [-0.4000001549720764, -0.3783785104751587, -0.0222221314907074, -0.2972975075244904, 0.422221839427948, -0.4324324131011963, 0.3555558323860169, 0.3243244886398315, -0.0222221314907074, 0.3243244886398315, -0.3111111521720886, 0.2432435154914856, -0.3111111521720886, -0.02702751755714417], 0
                        ]
                    ]]
                ],
                [], !1, !1, 8489410682469384, [], null
            ],
            ["t141", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 29912763127952, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, 0.5142857432365417, 0.5, [],
                            [-0.399999737739563, -0.3666670024394989, -0.02857175469398499, -0.09999999403953552, 0.3714282512664795, -0.3666670024394989, 0.2571432590484619, 0, 0.2571432590484619, 0.2333329916000366, -0.02857175469398499, 0.199999988079071, -0.2857147455215454, 0.2333329916000366, -0.2857147455215454, 0], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x3a4d54c745715, [], null
            ],
            ["t142", R, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7148421736518481, [
                        ["images/b1-sheet0.png", 248, 0, 0, 35, 30, 1, 0.5142857432365417, 0.5, [],
                            [-0.399999737739563, -0.3666670024394989, -0.02857175469398499, -0.09999999403953552, 0.3714282512664795, -0.3666670024394989, 0.2571432590484619, 0, 0.2571432590484619, 0.2333329916000366, -0.02857175469398499, 0.199999988079071, -0.2857147455215454, 0.2333329916000366, -0.2857147455215454, 0], 0
                        ]
                    ]]
                ],
                [], !1, !1, 9092166032236260, [], null
            ],
            ["t143", U, !1, [], 0, 0, null, null, [], !1, !1, 9746837852651456, [], null],
            ["t144", U, !1, [], 0, 0, null, null, [], !1, !1, 6066259343177385, [], null],
            ["t145", U, !1, [], 0, 0, null, null, [], !1, !1, 6294183162810977, [], null],
            ["t146", U, !1, [], 0, 0, null, null, [], !1, !1, 0xf8b67a59018fe, [], null],
            ["t147", R, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7872453824775731, [
                        ["images/sprite14-sheet0.png", 1102, 0, 0, 161, 39, 1, 0.5962733030319214, 0.1794871836900711, [],
                            [-0.4223603010177612, -0.1794871836900711, -2.980232238769531E-7, -0.1794871836900711, 0.4037266969680786, -0.1794871836900711, 0.3975157141685486, -1.788139343261719E-7, 0.1987577080726624, 0.8205128312110901, -2.980232238769531E-7, 0.8205128312110901, -0.5838509202003479, 0.8205128312110901, -0.590062141418457, -1.788139343261719E-7], 0
                        ]
                    ]]
                ],
                [
                    ["Solid",
                        Q, 9690198872373498
                    ]
                ], !1, !1, 7522407880287145, [], null
            ],
            ["t148", U, !1, [], 0, 0, null, null, [], !1, !1, 8389402227358009, [], null]
        ],
        [],
        [
            ["Layout 1", 1708, 960, !1, "Event sheet 1", 487492712171351, [
                    ["Layer 0", 0, 0xcdb1df9c30ec1, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [3, 1, 0, 852, 478, 0, 0, 1, 0, 0, 0, 0, []], 0, 0, [],
                                [],
                                [0, 0]
                            ],
                            [
                                [460, 303, 0, 198, 126, 0, -1.346299995930167E-5, 1, 0.4978354871273041, 2.05504584312439, 0, 0, []], 1, 1, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [457.4993286132813, 327.0263061523438, 0, 334, 236, 0, -0.001084967982023954, 1, 0.5, 0.502439022064209,
                                    0, 0, [
                                        []
                                    ]
                                ], 6, 12, [],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [120, 357, 0, 306, 252, 0, 0, 1, 0.5, 0.5, 0, 0, []], 43, 4, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [760, 365, 0, 309, 248, 0, 0, 1, 0.5, 0.5, 0, 0, []], 44, 5, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [206, 71, 0, 90.34666442871094, 70.72888946533203, 0, 0, 1, 0.5021644830703735, 0.5, 0, 0, []], 107, 103, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [711, 74, 0, 95, 79, 0, 0, 1, 0.5021644830703735, 0.5, 0, 0, []], 108, 104, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [671, 62, 0, 200, 30, 0, 0, 1, 0, 0, 0, 0, []], 109, 105, [],
                                [],
                                ["Developers", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [185,
                                    60, 0, 200, 30, 0, 0, 1, 0, 0, 0, 0, []
                                ], 110, 106, [],
                                [],
                                ["Help", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [417, 87, 0, 200, 69, 0, 0, 1, 0, 0, 0, 0, []], 117, 113, [],
                                [],
                                ["PLAY", 0, "22pt Cooper Black", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ],
            ["Layout 2", 3E3, 900, !1, "Event sheet 2", 6562977325932976, [
                    ["Layer 0", 0, 6394494183103087, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [2130, 277, 0, 1733, 557, 0, -3.213999889339902E-6, 1, 0.5, 0.5, 0, 0, []], 56, 50, [
                                    [0]
                                ],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [630, 276, 0, 1288, 557, 0, 0, 1, 0.5, 0.5, 0, 0, []], 10, 16, [
                                    [0]
                                ],
                                [],
                                [0, "Default",
                                    0, 1
                                ]
                            ],
                            [
                                [173, 271, 0, 64, 64, 0, 0, 1, 0.5, 0.5, 0, 0, []], 12, 17, [],
                                [
                                    [1],
                                    [330, 1500, 1500, 650, 1500, 1E3, 1, 1],
                                    [200, 600, 500, 3, 0, 1, 1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [95, 331.1282043457031, 0, 161, 62, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 13, 18, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [228, 332, 0, 161, 62, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 14, 19, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [327, 334, 0, 161, 63, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 15, 20, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [478, 335, 0, 161, 63, 0, 0, 1, 0.5962733030319214,
                                    0.1794871836900711, 0, 0, []
                                ], 16, 21, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [723, 340, 0, 161, 62, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 17, 22, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [58, 279, 0, 173, 157, 0, 0, 1, 0.5, 0.5, 0, 0, []], 18, 23, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [422, 277, 0, 64, 96, 0, 0, 1, 0.5, 0.5, 0, 0, []], 19, 24, [],
                                [
                                    [1],
                                    [1, 0, 0, 4, 0, 0, 0, 50, 0]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [69, 670, 0, 26, 43, 0, 2.196796655654907, 1, 0.501474916934967, 0.5, 0, 0, []], 22, 27, [],
                                [
                                    [400, 0, 0, 0, 1, 1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [848, 336, 0, 161, 56, 0, 0, 1, 0.5962733030319214, 0.1794871836900711,
                                    0, 0, []
                                ], 23, 2, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [970, 337, 0, 161, 55, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 24, 28, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1080, 339.3333435058594, 0, 161, 52, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 25, 29, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1191, 340, 0, 161, 50, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 26, 30, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [291, 153, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 28, 32, [
                                    [1]
                                ],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [619, 120, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 29, 33, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [857, 226, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 31, 34, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1153, 181, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 32, 35, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [149, 68, 0, 66, 23, 0, 0, 1, 0, 0, 0, 0, []], 33, 36, [],
                                [
                                    []
                                ],
                                ["Points", 0, "12pt Arial Rounded MT Bold", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [1438.236083984375, 302.3333740234375, 0, 205, 102, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []],
                                58, 52, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1558, 306, 0, 161, 97, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 59, 53, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1658, 309, 0, 161, 92, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 60, 54, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1916, 342, 0, 161, 51, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 61, 55, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2019, 344.6154174804688, 0, 161, 48, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 62, 56, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2127, 346.6153869628906, 0, 161,
                                    48, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []
                                ], 63, 57, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2374, 259, 0, 122, 161, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 64, 58, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2449, 260, 0, 161, 159, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 65, 59, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1709, 161, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 66, 60, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1942, 209, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 67, 61, [],
                                [],
                                [0, "Default",
                                    0, 1
                                ]
                            ],
                            [
                                [2363, 81, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 68, 62, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2305, 111, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 69, 63, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2437, 116, 0, 35, 30, 0, 0, 1, -1.057142853736877, -0.03333333507180214, 0, 0, []], 70, 64, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [981, 278, 0, 64, 96, 0, 0, 1, 0.5, 0.5, 0, 0, []], 71, 65, [],
                                [
                                    [1],
                                    [1, 0, 0, 4, 0, 0, 0, 50, 0]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1962, 290, 0, 64, 96, 0, 0, 1, 0.5, 0.5, 0, 0, []], 72, 66, [],
                                [
                                    [1],
                                    [1, 0, 0, 4, 0, 0, 0, 50, 0]
                                ],
                                [0, "Default",
                                    0, 1
                                ]
                            ],
                            [
                                [2635, 301, 0, 64, 96, 0, 0, 1, 0.5, 0.5, 0, 0, []], 73, 67, [],
                                [
                                    [1],
                                    [1, 0, 0, 4, 0, 0, 0, 50, 0]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2797, 353, 0, 161, 39, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 74, 68, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2662, 354, 0, 161, 39, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 75, 69, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2926, 286, 0, 128, 128, 0, 0, 1, 0.5, 0.5, 0, 0, []], 54, 49, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [171, 472, 0, 51, 51, 0, 0, 1, 2.49056601524353, 1.029126167297363, 0, 0, []], 76, 3, [],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [783, 553, 0, 48,
                                    51, 0, 1.570829749107361, 1, 2.49056601524353, 1.029126167297363, 0, 0, []
                                ], 77, 51, [],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [780, 364, 0, 45, 49, 0, -1.570803642272949, 1, 2.49056601524353, 1.029126167297363, 0, 0, []], 78, 70, [],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [98, 441, 0, 33, 32, 0, 0, 1, -0.4545454680919647, 0.5, 0, 0, []], 79, 26, [],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1698, 556, 0, 2632, 48, 0, 0, 1, 0.5, 0.5, 0, 0, []], 105, 101, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [38, 80, 0, 51, 30, 0, 0, 1, 0.5021644830703735, 0.5, 0, 0, []], 122, 25, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [105, 79, 0, 56, 28, 0, 0, 1, 0.5021644830703735,
                                    0.5, 0, 0, []
                                ], 123, 120, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [20, 68, 0, 40, 22, 0, 0, 1, 0, 0, 0, 0, []], 124, 121, [],
                                [],
                                ["play", 0, "12pt Cooper Black", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [82, 67, 0, 52, 21, 0, 0, 1, 0, 0, 0, 0, []], 125, 122, [],
                                [],
                                ["pause", 0, "12pt Cooper Black", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [2926, 356, 0, 161, 39, 0, 0, 1, 0.5962733030319214, 0.1794871836900711, 0, 0, []], 147, 31, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ],
            ["Layout 3", 1300, 600, !1, "Event sheet 3", 5158639358629867, [
                    ["Layer 0", 0, 4913322152125908, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [0, 0,
                                    0, 855, 505, 0, 0, 1, 0, 0, 0, 0, []
                                ], 34, 37, [],
                                [],
                                [0, 0]
                            ],
                            [
                                [229, 88, 0, 758, 199, 0, 0, 1, 0, 0, 0, 0, []], 35, 38, [],
                                [],
                                ["YOU LOSE......!!!!", 0, "48pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [1026, 142, 0, 243, 201, 0, 0.862159788608551, 1, 0.7981651425361633, -1.386138558387756, 0, 0, []], 36, 39, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [690, 354, 0, 42, 58, 0, 0, 1, 0.5023255944252014, 0.5, 0, 0, []], 38, 41, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [243, 336, 0, 231, 162, 0, 0, 1, 0.7981651425361633, -1.386138558387756, 0, 0, []], 39, 42, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [-214.3416137695313, 113.3087463378906,
                                    0, 230, 218, 0, -1.171298623085022, 1, 0.7981651425361633, -1.386138558387756, 0, 0, []
                                ], 39, 43, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [128, 363, 0, 32, 53, 0, 0, 1, 0.4976744055747986, 0.5, 0, 0, []], 40, 44, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [63, 295, 0, 200, 71, 0, 0, 1, 0, 0, 0, 0, []], 37, 40, [],
                                [],
                                ["Play Again", 0, "22pt Cooper Black", "rgb(51,51,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [639, 280, 0, 87, 40, 0, 0, 1, 0, 0, 0, 0, []], 41, 45, [],
                                [],
                                ["Quit", 0, "22pt Cooper Black", "rgb(51,51,0)", 0, 0, 0, 0, 0]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ],
            ["Layout 4", 1708, 960, !1, "Event sheet 4", 9809794300215908, [
                    ["Layer 0", 0, 349087705336846, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [1, 0, 0, 854, 600, 0, 0, 1, 0, 0, 0, 0, []], 46, 7, [],
                                [],
                                [0, 0]
                            ],
                            [
                                [433, 134, 0, 227, 207, 0, 0, 1, 0.5, 0.5, 0, 0, []], 45, 6, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [215, 235, 0, 528, 120, 0, 0, 1, 0, 0, 0, 0, []], 47, 8, [],
                                [],
                                ["Level 1  Complete...!!!", 0, "36pt Cooper Black", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [424, 518, 0, 229, 107, 0, 0, 1, 0.4881889820098877, 1.246153831481934, 0, 0, []], 49, 10, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [425, 357, 0, 448, 192, 0, 0, 1, 0.5, 0.5, 0, 0, []], 48, 9, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [425, 365, 0, 58, 78, 0, 0, 1, 0.5023255944252014, 0.5,
                                    0, 0, []
                                ], 50, 11, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [347, 427, 0, 200, 63, 0, 0, 1, 0, 0, 0, 0, []], 51, 46, [],
                                [],
                                ["Go to next level", 0, "bold 16pt Cooper Std Black", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [19, 27, 0, 232, 85, 0, 0, 1, 0, 0, 0, 0, []], 52, 47, [],
                                [],
                                ["Go to home", 0, "26pt Cooper Black", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [100, 112, 0, 57, 81, 0, 0, 1, 0.4976744055747986, 0.5, 0, 0, []], 53, 48, [],
                                [],
                                [0, "Default", 0, 1]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ],
            ["Layout 5", 1708, 960, !1, "Event sheet 5", 332587643298595, [
                    ["Layer 0", 0, 6770766665048979, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [-9, -192, 0, 1863, 904, 0, 0, 1, 0, 0, 0, 0, []], 80, 71, [],
                                [],
                                [0, 0]
                            ],
                            [
                                [15, 845, 0, 109, 60, 0, 0, 1, 0, 7.627906799316406, 0, 0, []], 81, 72, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [122, 808, 0, 121, 55, 0, 0, 1, 0, 7.627906799316406, 0, 0, []], 82, 73, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [322, 817, 0, 121, 56, 0, 0.01368022989481688, 1, 0, 7.627906799316406, 0, 0, []], 83, 74, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [438, 1098, 0, 114, 98, 0, 0.01368022989481688, 1, 0, 7.627906799316406, 0, 0, []], 84, 75, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [560, 1080, 0, 119, 95, 0, -2.325199966435321E-5, 1, 0, 7.627906799316406,
                                    0, 0, []
                                ], 85, 76, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [791.0046997070312, 817.162841796875, 0, 141, 56, 0, -5.461600085254759E-5, 1, 0, 7.627906799316406, 0, 0, []], 86, 77, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [932.0035400390625, 795.279052734375, 0, 142, 53, 0, -5.461600085254759E-5, 1, 0, 7.627906799316406, 0, 0, []], 87, 78, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1194.02880859375, 1258.232543945313, 0, 87, 123, 0, -5.461600085254759E-5, 1, 0, 7.627906799316406, 0, 0, []], 88, 79, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1286.63623046875, 1215.420166015625, 0, 94, 117, 0, -0.01353061012923718,
                                    1, 0, 7.627906799316406, 0, 0, []
                                ], 89, 80, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1458.252075195313, 830.6409301757812, 0, 160, 60, 0, 0.02439116127789021, 1, 0, 7.627906799316406, 0, 0, []], 90, 81, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [490, 317, 0, 128, 96, 0, 0, 1, 0.5, 0.5, 0, 0, []], 91, 82, [],
                                [
                                    [1],
                                    [1, 0, 0, 4, 0, 0, 0, 50, 0]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [908, 349, 0, 128, 96, 0, -2.105000021401793E-6, 1, 0.5, 0.5, 0, 0, []], 92, 83, [],
                                [
                                    [1],
                                    [1, 0, 0, 4, 0, 0, 0, 50, 0]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1281, 283, 0, 128, 96, 0, -2.105000021401793E-6, 1, 0.5, 0.5, 0, 0, []], 93, 84, [],
                                [
                                    [1],
                                    [1, 0, 0, 4, 0, 0, 0, 50,
                                        0
                                    ]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1351.130859375, 865.4251708984375, 0, 116, 65, 0, 0.02439116127789021, 1, 0, 7.627906799316406, 0, 0, []], 94, 85, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [184, 358, 0, 64, 64, 0, 0, 1, 0.5, 0.5, 0, 0, []], 95, 86, [],
                                [
                                    [330, 1500, 1500, 650, 1500, 1E3, 1, 1],
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [64, 346, 0, 203, 168, 0, 0, 1, 0.5, 0.5, 0, 0, []], 96, 87, [],
                                [
                                    [1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [278, 290, 0, 45, 37, 0, 0, 1, -0.7111111283302307, 0.8918918967247009, 0, 0, []], 98, 88, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [567.1333618164062, 254.4324645996094, 0, 42, 33, 0, 0, 1, -0.7111111283302307,
                                    0.8918918967247009, 0, 0, []
                                ], 99, 89, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [984, 324, 0, 45, 37, 0, 0, 1, -0.7111111283302307, 0.8918918967247009, 0, 0, []], 100, 90, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1386, 211, 0, 45, 37, 0, 0, 1, -0.7111111283302307, 0.8918918967247009, 0, 0, []], 101, 91, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1508, 310, 0, 45, 37, 0, 0, 1, -0.7111111283302307, 0.8918918967247009, 0, 0, []], 102, 92, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [97, 174, 0, 90, 42, 0, 0, 1, 0, 0, 0, 0, []], 103, 93, [],
                                [],
                                ["points", 0, "bold 12pt Arial", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [1670, 320, 0, 128, 128, 0, 0, 1, 0.5,
                                    0.5, 0, 0, []
                                ], 104, 94, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1141, 661, 0, 2632, 48, 0, 0, 1, 0.5, 0.5, 0, 0, []], 105, 102, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [117.5, 437.8709716796875, 0, 37, 35, 0, 0, 1, -0.5, 0.5161290168762207, 0, 0, []], 128, 126, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [559.456298828125, 434, 0, 47, 48, 0, 0, 1, 0.5048543810844421, 0.5, 0, 0, []], 129, 127, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [212, 438.9417724609375, 0, 47, 43, 0, 0, 1, 0.5, 0.5048543810844421, 0, 0, []], 130, 128, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [618.5631103515625, 433.5, 0, 43, 46, 0, 0, 1, 0.4951456189155579, 0.5, 0, 0, []], 131,
                                129, [],
                                [],
                                [0, "Default", 0, 1]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ],
            ["Layout 6", 1708, 960, !1, "Event sheet 6", 0x75b109929300f, [
                    ["Layer 0", 0, 7802838970040926, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [1, 0, 0, 1162, 600, 0, 0, 1, 0, 0, 0, 0, []], 46, 95, [],
                                [],
                                [0, 0]
                            ],
                            [
                                [398, 181, 0, 227, 207, 0, 0, 1, 0.5, 0.5, 0, 0, []], 45, 96, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [110, 172, 0, 57, 81, 0, 0, 1, 0.4976744055747986, 0.5, 0, 0, []], 53, 97, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [27, 63, 0, 232, 85, 0, 0, 1, 0, 0, 0, 0, []], 52, 98, [],
                                [],
                                ["Go to home", 0, "26pt Cooper Black", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [268, 293, 0, 340,
                                    120, 0, 0, 1, 0, 0, 0, 0, []
                                ], 47, 99, [],
                                [],
                                ["Level  2  Complete...!!!", 0, "36pt Cooper Black", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ],
            ["Layout 7", 1708, 960, !1, "Event sheet 7", 8947380257445884, [
                    ["Layer 0", 0, 7328399415057401, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [-3, -5, 0, 1075, 606, 0, 0, 1, 0, 0, 0, 0, []], 111, 107, [],
                                [],
                                [0, 0]
                            ],
                            [
                                [147, 329, 0, 246, 205, 0, 0, 1, 0.5, 0.502439022064209, 0, 0, []], 112, 110, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [333, 39, 0, 317, 96, 0, 0, 1, 0, 0, 0, 0, []], 113, 111, [],
                                [],
                                ["Press Up key to jump", 0, "16pt Cooper Black", "rgb(255,255,255)",
                                    0, 0, 0, 0, 0
                                ]
                            ],
                            [
                                [282, 80, 0, 362, 96, 0, 0, 1, 0, 0, 0, 0, []], 114, 112, [],
                                [],
                                ["Press right key to move  forward", 0, "16pt Cooper Black", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [304, 119, 0, 362, 96, 0, 0, 1, 0, 0, 0, 0, []], 115, 114, [],
                                [],
                                ["Press left key to move back.", 0, "16pt Cooper Black", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [329, 157, 0, 404, 96, 0, 0, 1, 0, 0, 0, 0, []], 116, 115, [],
                                [],
                                ["Press space bar to shoot.", 0, "16pt Cooper Black", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [122.393928527832, 84.5, 0, 130, 91, 0, 0, 1, 0.5021644830703735, 0.5, 0, 0, []], 120, 108, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [74, 60, 0, 104, 48, 0, 0, 1, 0, 0, 0, 0, []], 121, 109, [],
                                [],
                                ["Back ", 0, "26pt Elephant", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [462, 309, 0, 45, 37, 0, 0, 1, 0.5111111402511597, 0.5135135054588318, 0, 0, []], 134, 131, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [538, 352, 0, 45, 37, 0, 0, 1, 0.5111111402511597, 0.5135135054588318, 0, 0, []], 135, 130, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [383, 348, 0, 45, 37, 0, 0, 1, 0.5111111402511597, 0.5135135054588318, 0, 0, []], 137, 132, [],
                                [],
                                [0, "Default", 0, 1]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ],
            ["Layout 8", 1708, 960, !1, "Event sheet 8", 4873558972910406, [
                    ["Layer 0", 0, 7282793582858216, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [-4, -3, 0, 1075, 606, 0, 0, 1, 0, 0, 0, 0, []], 111, 116, [],
                                [],
                                [0, 0]
                            ],
                            [
                                [94, 76, 0, 126, 97, 0, 0, 1, 0.5021644830703735, 0.5, 0, 0, []], 118, 117, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [55, 52, 0, 200, 44, 0, 0, 1, 0, 0, 0, 0, []], 119, 118, [],
                                [],
                                ["Back", 0, "24pt Elephant", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [148, 358, 0, 246, 205, 0, 0, 1, 0.5, 0.502439022064209, 0, 0, []], 112, 119, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [323, 336, 0, 45, 37, 0, 0, 1, 0.5111111402511597, 0.5135135054588318, 0, 0, []], 138, 133, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [516, 420, 0, 45, 37, 0, 0, 1, 0.5111111402511597, 0.5135135054588318, 0, 0, []], 139, 134, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [705, 331, 0, 45, 37, 0, 0, 1, 0.5111111402511597, 0.5135135054588318, 0, 0, []], 140, 135, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [409, 370, 0, 35, 30, 0, 0, 1, 0.5142857432365417, 0.5, 0, 0, []], 141, 136, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [603, 373, 0, 35, 30, 0, 0, 1, 0.5142857432365417, 0.5, 0, 0, []], 142, 137, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [271, 21, 0, 238, 50, 0, 0, 1, 0, 0, 0, 0, []], 143, 138, [],
                                [],
                                ["Developed by....", 0, "20pt Cooper Black", "rgb(255,255,255)", 0, 0, 0, 0,
                                    0
                                ]
                            ],
                            [
                                [401, 106, 0, 301, 55, 0, 0, 1, 0, 0, 0, 0, []], 144, 139, [],
                                [],
                                [" Renuka Tamboli", 0, "22pt Cooper Black", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [507, 146, 0, 301, 55, 0, 0, 1, 0, 0, 0, 0, []], 145, 140, [],
                                [],
                                ["&", 0, "22pt Cooper Black", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [415, 183, 0, 301, 55, 0, 0, 1, 0, 0, 0, 0, []], 146, 141, [],
                                [],
                                ["Mayuri Videkar", 0, "22pt Cooper Black", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ]
        ],
        [
            ["Event sheet 1", [
                [0, null, !1, null, 285366142998828, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 8529180501492133, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 1]
                        ]]
                    ],
                    [
                        [1, R.prototype.j.Xb, null, 5604627582639546, !1, [
                            [1, [2, "button"]],
                            [3, 1]
                        ]],
                        [-1, P.prototype.j.fa, null, 6576320872932304, !1, [
                            [6, "Layout 2"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x8605e3dfca4af, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 8206557990656659, !1, [
                            [4, 1]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 0x881d5661591e6, !1, [
                            [6, "Layout 2"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 965406942800864, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 5549984932787335, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 108]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 4981901624765077, !1, [
                            [6, "Layout 8"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 963343237580531, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 8491695981414675, !1, [
                            [4, 107]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 4818638252119984, !1, [
                            [6, "Layout 7"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9980096625649568, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 5305258447903844, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 107]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 0x4f2283a57bdb7, !1, [
                            [6, "Layout 7"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9856237129013288, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 7805204671452508, !1, [
                            [4, 108]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 4529137693602591, !1, [
                            [6, "Layout 8"]
                        ]]
                    ]
                ],
                [0, null, !1, null,
                    0x47484fbfe9fe2, [
                        [8, T.prototype.n.Uo, null, 0, !1, !1, !1, 4826768742588533, !1, [
                            [4, 1]
                        ]]
                    ],
                    [
                        [117, U.prototype.j.mm, null, 0x87d5ea25d279, !1, [
                            [0, [0, 50]]
                        ]],
                        [117, U.prototype.j.Wo, null, 8847311342526477, !1],
                        [-1, P.prototype.j.up, null, 877724281024438, !1, [
                            [0, [1, 0.1]]
                        ]],
                        [117, U.prototype.j.mm, null, 5664353592939524, !1, [
                            [0, [0, 100]]
                        ]]
                    ]
                ]
            ]],
            ["Event sheet 2", [
                [1, "butterflycounter", 0, 0, !1, !1, 6194364242153339, !1],
                [0, null, !1, null, 4924101113766897, [
                        [7, S.prototype.n.kf, null, 1, !1, !1, !1, 521864257812465, !1, [
                            [9, 39]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.Xb,
                            null, 0xb1e44f278603d, !1, [
                                [1, [2, "default"]],
                                [3, 1]
                            ]
                        ],
                        [12, R.prototype.j.Eh, null, 0xddcefb1732178, !1, [
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6732501618505483, [
                        [7, S.prototype.n.kf, null, 1, !1, !1, !1, 0xd999cec323985, !1, [
                            [9, 37]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.Eh, null, 8782963289132748, !1, [
                            [3, 0]
                        ]],
                        [12, R.prototype.j.Xb, null, 0xaf83ac9cef327, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 906769997288302, [
                        [7, S.prototype.n.Zf, null, 1, !1, !1, !1, 5385978676691681, !1, [
                            [9, 32]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.Fh, null, 8551684196970834, !1, [
                            [4, 22],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6248051856080704, [
                        [22, R.prototype.n.aa, null, 0, !1, !1, !0, 4994220761759485, !1, [
                            [4, 19]
                        ]]
                    ],
                    [
                        [19, R.prototype.j.T, null, 4650014868036724, !1],
                        [-1, P.prototype.j.ra, null, 0x639dbdb67dfad, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 10]]
                        ]],
                        [33, U.prototype.j.ta, null, 0x81fc9df62447f, !1, [
                            [7, [23, "butterflycounter"]]
                        ]],
                        [22, R.prototype.j.T, null, 0xec5f332aa60f3, !1]
                    ]
                ],
                [0, null, !1, null, 0xc94d75b96f2d2, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 8232133301929112, !1, [
                            [4, 28]
                        ]]
                    ],
                    [
                        [28, R.prototype.j.T, null, 8281858299998084, !1],
                        [-1, P.prototype.j.ra, null, 548324624991365, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 1]]
                        ]],
                        [33, U.prototype.j.ta, null, 9081796198718236, !1, [
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x573bfe2823661, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 7402605547542145, !1, [
                            [4, 54]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 4906408913292238, !1, [
                            [6, "Layout 4"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7308485659610971, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 320586695520967, !1, [
                            [4, 29]
                        ]]
                    ],
                    [
                        [29, R.prototype.j.T, null, 0x402dbbd8721f3, !1],
                        [-1, P.prototype.j.ra,
                            null, 9271781722723832, !1, [
                                [11, "butterflycounter"],
                                [7, [0, 1]]
                            ]
                        ],
                        [33, U.prototype.j.ta, null, 0x3da3faf3762d2, !1, [
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x9c34c929617a2, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 8099386534732465, !1, [
                            [4, 31]
                        ]]
                    ],
                    [
                        [31, R.prototype.j.T, null, 6239522191569016, !1],
                        [33, U.prototype.j.ta, null, 781554102309413, !1, [
                            [7, [23, "butterflycounter"]]
                        ]],
                        [-1, P.prototype.j.ra, null, 0x52b467b3c6ea3, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 1]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7403889985554619, [
                        [12, R.prototype.n.aa,
                            null, 0, !1, !1, !0, 7097943343484178, !1, [
                                [4, 32]
                            ]
                        ]
                    ],
                    [
                        [32, R.prototype.j.T, null, 0xe3395ca034ee1, !1],
                        [-1, P.prototype.j.ra, null, 8916629921162785, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 1]]
                        ]],
                        [33, U.prototype.j.ta, null, 0xdef65f89b61f5, !1, [
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7564689132580117, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 8220732949721281, !1, [
                            [4, 66]
                        ]]
                    ],
                    [
                        [66, R.prototype.j.T, null, 0x7e56b734184d9, !1],
                        [-1, P.prototype.j.ra, null, 0x507db2a796585, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 1]]
                        ]],
                        [33, U.prototype.j.ta,
                            null, 7515830442211648, !1, [
                                [7, [23, "butterflycounter"]]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 0xbaa08625cbb5f, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 0xd1a6c8be6e859, !1, [
                            [4, 67]
                        ]]
                    ],
                    [
                        [67, R.prototype.j.T, null, 8184259785361338, !1],
                        [-1, P.prototype.j.ra, null, 8353488606494007, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 1]]
                        ]],
                        [33, U.prototype.j.ta, null, 408098205769211, !1, [
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x5c763ddcc97fc, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 7611939917146959, !1, [
                            [4, 68]
                        ]]
                    ],
                    [
                        [68, R.prototype.j.T, null, 6121245400983466, !1],
                        [-1, P.prototype.j.ra, null, 9952678165544164, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 1]]
                        ]],
                        [33, U.prototype.j.ta, null, 361301992124566, !1, [
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6844901210158628, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 346109506079406, !1, [
                            [4, 69]
                        ]]
                    ],
                    [
                        [69, R.prototype.j.T, null, 6788238528762806, !1],
                        [-1, P.prototype.j.ra, null, 0xa4ebb17b40fff, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 1]]
                        ]],
                        [33, U.prototype.j.ta, null, 4905835401357465, !1, [
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x620ffbf1b3b7e, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 9208994382059168, !1, [
                            [4, 70]
                        ]]
                    ],
                    [
                        [70, R.prototype.j.T, null, 0xb5fc1571386ea, !1],
                        [-1, P.prototype.j.ra, null, 0xba453e2376d09, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 1]]
                        ]],
                        [33, U.prototype.j.ta, null, 5096351223582535, !1, [
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7793162075728309, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 0x73a5c58867116, !1, [
                            [4, 71]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.T, null, 0xf4d9f24e6eba0, !1],
                        [-1, P.prototype.j.ra, null, 0x66c593ca25e4d, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 10]]
                        ]],
                        [33, U.prototype.j.ta, null, 7819712336332872, !1, [
                            [7, [23, "butterflycounter"]]
                        ]],
                        [-1, P.prototype.j.fa, null, 5794479309988574, !1, [
                            [6, "Layout 3"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 4619722672982615, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 6988721550859168, !1, [
                            [4, 72]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.T, null, 0xbd9c5185d55e3, !1],
                        [-1, P.prototype.j.ra, null, 9378242778750694, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 10]]
                        ]],
                        [33, U.prototype.j.ta, null, 0xb924d722a4b10, !1, [
                            [7, [23, "butterflycounter"]]
                        ]],
                        [-1, P.prototype.j.fa, null, 0xa62e1cf835af, !1, [
                            [6, "Layout 3"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9179785712132188, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 5375584385108776, !1, [
                            [4, 73]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.T, null, 8131941533970139, !1],
                        [-1, P.prototype.j.ra, null, 0xb1a658d1aaf34, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 10]]
                        ]],
                        [33, U.prototype.j.ta, null, 0x405fbaf13f2dd, !1, [
                            [7, [23, "butterflycounter"]]
                        ]],
                        [-1, P.prototype.j.fa, null, 0xf04e539c66d2, !1, [
                            [6, "Layout 3"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 4837274867532067, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 0x710305fbc341, !1, [
                            [4, 19]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.T, null, 8315730050735316, !1],
                        [-1, P.prototype.j.ra, null, 4589373599261036, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 10]]
                        ]],
                        [33, U.prototype.j.ta, null, 5065340308596695, !1, [
                            [7, [23, "butterflycounter"]]
                        ]],
                        [-1, P.prototype.j.fa, null, 672886183175708, !1, [
                            [6, "Layout 3"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9475649555676344, [
                        [7, S.prototype.n.kf, null, 1, !1, !1, !1, 9006589557545439, !1, [
                            [9, 17]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.Xb, null, 6186661770164914, !1, [
                            [1, [2, "slide"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xcb3f379d4dc93, [
                        [7, S.prototype.n.Zf, null, 1, !1, !1, !1, 379161386397045, !1, [
                            [9, 38]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.Xb, null, 0xc35331a342137, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x9149cbe636b6c, [
                        [22, R.prototype.n.aa, null, 0, !1, !1, !0, 0xf67d97b0c6fbb, !1, [
                            [4, 71]
                        ]]
                    ],
                    [
                        [71, R.prototype.j.T, null, 7959820214989308, !1],
                        [-1, P.prototype.j.ra, null, 400636399144385, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 10]]
                        ]],
                        [33, U.prototype.j.ta, null, 0x680e155aeb365, !1, [
                            [7, [23, "butterflycounter"]]
                        ]],
                        [22, R.prototype.j.T, null, 0x96a12e48b4c2, !1]
                    ]
                ],
                [0, null, !1, null, 688481328968977, [
                        [22, R.prototype.n.aa, null, 0, !1, !1, !0, 6301428408703799, !1, [
                            [4, 72]
                        ]]
                    ],
                    [
                        [72, R.prototype.j.T, null, 0xfbe1a05e586f3, !1],
                        [22, R.prototype.j.T, null, 0xcf459612fa483, !1],
                        [-1, P.prototype.j.ra, null, 8233615098409222, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 10]]
                        ]],
                        [33, U.prototype.j.ta, null, 9957798454660744, !1, [
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7460350461997492, [
                        [22, R.prototype.n.aa, null, 0, !1, !1, !0, 8983048678283167, !1, [
                            [4, 73]
                        ]]
                    ],
                    [
                        [73, R.prototype.j.T, null, 0xea5946b6a6061, !1],
                        [-1, P.prototype.j.ra, null, 8018339043491116, !1, [
                            [11, "butterflycounter"],
                            [7, [0, 10]]
                        ]],
                        [22,
                            R.prototype.j.T, null, 8062284514950717, !1
                        ],
                        [33, U.prototype.j.ta, null, 7830496108983363, !1, [
                            [7, [23, "butterflycounter"]]
                        ]],
                        [22, R.prototype.j.T, null, 0x4a61406896577, !1]
                    ]
                ],
                [0, null, !1, null, 0x658150fe1c622, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 7883063248961174, !1, [
                            [4, 79]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.Fh, null, 9540214947410392, !1, [
                            [4, 22],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x8f9df4543f34b, [
                        [12, R.prototype.n.aa, null, 0, !1, !1, !0, 5805197115237325, !1, [
                            [4, 105]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.T, null, 9954018189690544, !1],
                        [-1, P.prototype.j.fa,
                            null, 0x561924a9c6b65, !1, [
                                [6, "Layout 3"]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 0xa76fc2b3324f3, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 7585907435224078, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 123]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.nm, null, 6342580165996333, !1, [
                            [0, [0, 0]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xdba1bb9eb19c4, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 4857673495568372, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 122]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.nm, null, 390080674347002, !1, [
                            [0, [1, 1]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7888418160273799, [
                        [-1, P.prototype.n.So, null, 0, !1, !1, !1, 8844961449085389, !1, [
                            [0, [1, 1]]
                        ]]
                    ],
                    []
                ],
                [0, null, !1, null, 0x6386820f6a0ed, [
                        [9, Z.prototype.n.hf, null, 0, !1, !1, !1, 0x832d3001c61a1, !1, [
                            [4, 76]
                        ]]
                    ],
                    [
                        [12, Zb.prototype.j.xe, "Platform", 3531679991969, !1, [
                            [3, 2]
                        ]],
                        [12, R.prototype.j.Xb, null, 0x9d6dfbb073d61, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xe934522b76b3d, [
                        [9, Z.prototype.n.hf, null, 0, !1, !1, !1, 0x6d499e5236960, !1, [
                            [4, 78]
                        ]]
                    ],
                    [
                        [12, Wb.prototype.j.xe, "8Direction", 0xcfb41043e343a, !1, [
                            [3, 0]
                        ]],
                        [12, R.prototype.j.Xb, null, 8064858309574291, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 8404234887612549, [
                        [9, Z.prototype.n.hf, null, 0, !1, !1, !1, 8266863146010441, !1, [
                            [4, 77]
                        ]]
                    ],
                    [
                        [12, R.prototype.j.Xb, null, 0x7491db66814cd, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]],
                        [12, Wb.prototype.j.xe, "8Direction", 5864609889333541, !1, [
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7642220442337726, [],
                    []
                ]
            ]],
            ["Event sheet 3", [
                [0, null, !1, null, 7344882194666523, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 8203836939640748, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 38]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 0x524b3296ac895, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xa78c4cac8cd35, [
                        [8, T.prototype.n.Vb, null,
                            1, !1, !1, !1, 0x9ad8f87e19094, !1, [
                                [3, 0],
                                [3, 0],
                                [4, 40]
                            ]
                        ]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 0x53f0e09f90ee7, !1, [
                            [6, "Layout 2"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xce86b2e254ba4, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 8424298107648585, !1, [
                            [4, 38]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 8870125554037055, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xd09bacc48b0b5, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 9034792067668168, !1, [
                            [4, 40]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 8528311202004994, !1, [
                            [6, "Layout 2"]
                        ]]
                    ]
                ]
            ]],
            ["Event sheet 4", [
                [0, null, !1, null, 0xd22d22612ed8e, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 851278839111069, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 50]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 5896748394162734, !1, [
                            [6, "Layout 5"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9888266355210696, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 9814007775104012, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 53]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 4688860040943253, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x9696d1528a87b, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 0x5c8539387da9, !1, [
                            [4, 50]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 8726760877002685, !1, [
                            [6, "Layout 5"]
                        ]]
                    ]
                ],
                [0, null, !1,
                    null, 0xe87f32faa4922, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 5928153937574864, !1, [
                            [4, 53]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 9174623769140952, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ]
            ]],
            ["Event sheet 5", [
                [1, "butterflycounter2", 0, 0, !1, !1, 5959262668815484, !1],
                [0, null, !1, null, 6925968214331897, [
                        [7, S.prototype.n.kf, null, 1, !1, !1, !1, 0xe38953c6b3ffb, !1, [
                            [9, 39]
                        ]]
                    ],
                    [
                        [95, R.prototype.j.Xb, null, 0xeaa62ecb54d47, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]],
                        [95, R.prototype.j.Eh, null, 617572236790184, !1, [
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6962828655619996, [
                        [7, S.prototype.n.kf,
                            null, 1, !1, !1, !1, 6238419441768239, !1, [
                                [9, 37]
                            ]
                        ]
                    ],
                    [
                        [95, R.prototype.j.Eh, null, 6486044796578349, !1, [
                            [3, 0]
                        ]],
                        [95, R.prototype.j.Xb, null, 0xed47b123f2af4, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 8688980230996622, [
                        [8, T.prototype.n.em, null, 1, !1, !1, !1, 0xe9c49eb13b511, !1]
                    ],
                    [
                        [21, R.prototype.j.sp, null, 9320297944144232, !1]
                    ]
                ],
                [0, null, !1, null, 7024761181571556, [
                        [7, S.prototype.n.Zf, null, 1, !1, !1, !1, 8199295945449856, !1, [
                            [9, 32]
                        ]]
                    ],
                    [
                        [95, R.prototype.j.Fh, null, 9135113783190328, !1, [
                            [4, 22],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]]
                    ]
                ],
                [0,
                    null, !1, null, 7328453329317021, [
                        [22, R.prototype.n.aa, null, 0, !1, !1, !0, 6823783665457046, !1, [
                            [4, 91]
                        ]]
                    ],
                    [
                        [91, R.prototype.j.T, null, 0x741999da0a32e, !1],
                        [-1, P.prototype.j.ra, null, 9828605280601496, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 10]]
                        ]],
                        [103, U.prototype.j.ta, null, 804209530899096, !1, [
                            [7, [23, "butterflycounter2"]]
                        ]],
                        [22, R.prototype.j.T, null, 4867838519805548, !1]
                    ]
                ],
                [0, null, !1, null, 4871858888078946, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 7667250095611704, !1, [
                            [4, 98]
                        ]]
                    ],
                    [
                        [98, R.prototype.j.T, null, 4706831248015768, !1],
                        [-1, P.prototype.j.ra, null, 325273827569622, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 1]]
                        ]],
                        [103, U.prototype.j.ta, null, 6647609285118323, !1, [
                            [7, [23, "butterflycounter2"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9749608078183892, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 6368493078825912, !1, [
                            [4, 54]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 0x3efd30b31aef9, !1, [
                            [6, "Layout 4"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 4786795951251064, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 0xbb0ae3c39f65a, !1, [
                            [4, 99]
                        ]]
                    ],
                    [
                        [99, R.prototype.j.T, null, 9841570417695216, !1],
                        [-1, P.prototype.j.ra,
                            null, 7704088794208033, !1, [
                                [11, "butterflycounter2"],
                                [7, [0, 1]]
                            ]
                        ],
                        [103, U.prototype.j.ta, null, 61025917326259, !1, [
                            [7, [23, "butterflycounter2"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xe8cc136562675, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 8714813960918894, !1, [
                            [4, 100]
                        ]]
                    ],
                    [
                        [100, R.prototype.j.T, null, 408441817331365, !1],
                        [-1, P.prototype.j.ra, null, 6877528579746632, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 1]]
                        ]],
                        [103, U.prototype.j.ta, null, 7036131330273257, !1, [
                            [7, [23, "butterflycounter2"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xb377a412e91d2, [
                        [95, R.prototype.n.aa,
                            null, 0, !1, !1, !0, 0x70a7f2512144f, !1, [
                                [4, 101]
                            ]
                        ]
                    ],
                    [
                        [101, R.prototype.j.T, null, 438254265776655, !1],
                        [-1, P.prototype.j.ra, null, 7967982530787186, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 1]]
                        ]],
                        [103, U.prototype.j.ta, null, 5441920646655419, !1, [
                            [7, [23, "butterflycounter2"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xede0754c688c0, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 6134607602590218, !1, [
                            [4, 102]
                        ]]
                    ],
                    [
                        [102, R.prototype.j.T, null, 0x9b59756a420d8, !1],
                        [-1, P.prototype.j.ra, null, 7216879592689706, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 1]]
                        ]],
                        [33, U.prototype.j.ta,
                            null, 7807090557829809, !1, [
                                [7, [23, "butterflycounter2"]]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 0x69f5a244fb4e2, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 8376675565046299, !1, [
                            [4, 92]
                        ]]
                    ],
                    [
                        [95, R.prototype.j.T, null, 0x80cc21e8e1109, !1],
                        [-1, P.prototype.j.ra, null, 7886492290565507, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 10]]
                        ]],
                        [103, U.prototype.j.ta, null, 8081980963226851, !1, [
                            [7, [23, "butterflycounter2"]]
                        ]],
                        [-1, P.prototype.j.fa, null, 8063537531598201, !1, [
                            [6, "Layout 3"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xa8e88fd7ff369, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 9883852354045286, !1, [
                            [4, 93]
                        ]]
                    ],
                    [
                        [95, R.prototype.j.T, null, 5462223151316121, !1],
                        [-1, P.prototype.j.ra, null, 5754815851191135, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 10]]
                        ]],
                        [-1, P.prototype.j.fa, null, 0x8e7551f1604b5, !1, [
                            [6, "Layout 3"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7425368619524108, [
                        [7, S.prototype.n.Zf, null, 1, !1, !1, !1, 0x587cb4b5ac58d, !1, [
                            [9, 38]
                        ]]
                    ],
                    [
                        [95, R.prototype.j.Xb, null, 9517586866393784, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xbc0eb817675d6, [
                        [22, R.prototype.n.aa, null, 0, !1, !1, !0, 9630628385883916, !1, [
                            [4,
                                92
                            ]
                        ]]
                    ],
                    [
                        [92, R.prototype.j.T, null, 0x57d5c3db4ea3f, !1],
                        [-1, P.prototype.j.ra, null, 471179542896224, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 10]]
                        ]],
                        [103, U.prototype.j.ta, null, 5296832698142854, !1, [
                            [7, [23, "butterflycounter2"]]
                        ]],
                        [22, R.prototype.j.T, null, 0xe1d2114c8c1c, !1]
                    ]
                ],
                [0, null, !1, null, 6483193984350744, [
                        [22, R.prototype.n.aa, null, 0, !1, !1, !0, 9709049096449762, !1, [
                            [4, 93]
                        ]]
                    ],
                    [
                        [93, R.prototype.j.T, null, 0x51ff60af8170a, !1],
                        [-1, P.prototype.j.ra, null, 9872414219015336, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 10]]
                        ]],
                        [103, U.prototype.j.ta,
                            null, 9125130398726460, !1, [
                                [7, [23, "butterflycounter2"]]
                            ]
                        ],
                        [22, R.prototype.j.T, null, 0x782255bdfcffe, !1]
                    ]
                ],
                [0, null, !1, null, 8800364011518934, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 0xcd061cd371514, !1, [
                            [4, 128]
                        ]]
                    ],
                    [
                        [95, R.prototype.j.Fh, null, 0x865d59a67d44b, !1, [
                            [4, 22],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xa1046677fc3d, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 0x9cbabd3ec9ef5, !1, [
                            [4, 91]
                        ]]
                    ],
                    [
                        [95, R.prototype.j.T, null, 65791064940211, !1],
                        [-1, P.prototype.j.ra, null, 0x985200c8a85fa, !1, [
                            [11, "butterflycounter2"],
                            [7, [0, 10]]
                        ]],
                        [103, U.prototype.j.ta, null, 0x7d71c5402eb93, !1, [
                            [7, [23, "butterflycounter2"]]
                        ]],
                        [-1, P.prototype.j.fa, null, 6788772456223554, !1, [
                            [6, "Layout 3"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6593165386940093, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 0x6b975f893cc90, !1, [
                            [4, 104]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 6986274224391979, !1, [
                            [6, "Layout 6"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xc638f91c7dbf0, [
                        [95, R.prototype.n.aa, null, 0, !1, !1, !0, 0xe2dafaa13ce3b, !1, [
                            [4, 105]
                        ]]
                    ],
                    [
                        [95, R.prototype.j.T, null, 8659881179849199, !1],
                        [-1, P.prototype.j.fa, null, 0x89a2703d20df9, !1, [
                            [6, "Layout 3"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x93b30e33277c1, [
                        [9, Z.prototype.n.hf, null, 0, !1, !1, !1, 0xbeed3ea6cd031, !1, [
                            [4, 129]
                        ]]
                    ],
                    [
                        [12, Wb.prototype.j.xe, "8Direction", 5606338419164538, !1, [
                            [3, 0]
                        ]],
                        [12, R.prototype.j.Xb, null, 8868358232263573, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x8d009035adb9c, [
                        [9, Z.prototype.n.hf, null, 0, !1, !1, !1, 7325692756951468, !1, [
                            [4, 131]
                        ]]
                    ],
                    [
                        [12, Wb.prototype.j.xe, "8Direction", 5226951746137614, !1, [
                            [3, 1]
                        ]],
                        [12, R.prototype.j.Xb, null, 5156199012419004, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5067096310738945, [
                        [9, Z.prototype.n.hf, null, 0, !1, !1, !1, 0xf1861b356c567, !1, [
                            [4, 130]
                        ]]
                    ],
                    [
                        [12, Zb.prototype.j.xe, "Platform", 0x979fef014940f, !1, [
                            [3, 2]
                        ]],
                        [12, R.prototype.j.Xb, null, 6419372352752023, !1, [
                            [1, [2, "default"]],
                            [3, 1]
                        ]]
                    ]
                ]
            ]],
            ["Event sheet 6", [
                [1, "scoreloader", 0, 0, !1, !1, 0xf757b25a7fad7, !1],
                [0, null, !1, null, 0x6adb3e13ca2d, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 8504694061008404, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 53]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 0xe8b02cfa8a4c1, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 8617840039521441, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 0xa1e683fb3fdb5, !1, [
                            [4, 53]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 8542405317569303, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x4712b567200b3, [
                        [-1, P.prototype.n.gm, null, 1, !1, !1, !1, 0xc7caba797b0ac, !1]
                    ],
                    [
                        [-1, P.prototype.j.ra, null, 0xd743837f9e753, !1, [
                            [11, "scoreloader"],
                            [7, [23, "butterflycounter"]]
                        ]]
                    ]
                ]
            ]],
            ["Event sheet 7", [
                [0, null, !1, null, 8261759746173374, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 4890936181567192, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 120]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 0x917e50e76b237, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5720957504573638, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 0x6e9d834b8fbdc, !1, [
                            [4, 120]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 0x85779330da630, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ]
            ]],
            ["Event sheet 8", [
                [0, null, !1, null, 5664246710394705, [
                        [8, T.prototype.n.Vb, null, 1, !1, !1, !1, 698809114176888, !1, [
                            [3, 0],
                            [3, 0],
                            [4, 118]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa, null, 478983593150951, !1, [
                            [6, "Layout 1"]
                        ]]
                    ]
                ],
                [0, null, !1, null, 759108064947436, [
                        [9, Z.prototype.n.Wb, null, 1, !1, !1, !1, 0xfc6b7b0e8ba04, !1, [
                            [4, 118]
                        ]]
                    ],
                    [
                        [-1, P.prototype.j.fa,
                            null, 354046661593612, !1, [
                                [6, "Layout 1"]
                            ]
                        ]
                    ]
                ]
            ]]
        ], "media/", !1, 854, 480, 4, !0, !0, !0, "1.0.0.0", !0, !1, 3, 0, 142, !1, !0, []
    ]
};