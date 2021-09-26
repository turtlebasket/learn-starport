// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: learnstarport/bch_tx.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type BchTx struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id      uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Txid    string `protobuf:"bytes,3,opt,name=txid,proto3" json:"txid,omitempty"`
	To      string `protobuf:"bytes,4,opt,name=to,proto3" json:"to,omitempty"`
	From    string `protobuf:"bytes,5,opt,name=from,proto3" json:"from,omitempty"`
	Amount  string `protobuf:"bytes,6,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (m *BchTx) Reset()         { *m = BchTx{} }
func (m *BchTx) String() string { return proto.CompactTextString(m) }
func (*BchTx) ProtoMessage()    {}
func (*BchTx) Descriptor() ([]byte, []int) {
	return fileDescriptor_cd52456d1c237167, []int{0}
}
func (m *BchTx) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *BchTx) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_BchTx.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *BchTx) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BchTx.Merge(m, src)
}
func (m *BchTx) XXX_Size() int {
	return m.Size()
}
func (m *BchTx) XXX_DiscardUnknown() {
	xxx_messageInfo_BchTx.DiscardUnknown(m)
}

var xxx_messageInfo_BchTx proto.InternalMessageInfo

func (m *BchTx) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *BchTx) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *BchTx) GetTxid() string {
	if m != nil {
		return m.Txid
	}
	return ""
}

func (m *BchTx) GetTo() string {
	if m != nil {
		return m.To
	}
	return ""
}

func (m *BchTx) GetFrom() string {
	if m != nil {
		return m.From
	}
	return ""
}

func (m *BchTx) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func init() {
	proto.RegisterType((*BchTx)(nil), "turtlebasket.learnstarport.learnstarport.BchTx")
}

func init() { proto.RegisterFile("learnstarport/bch_tx.proto", fileDescriptor_cd52456d1c237167) }

var fileDescriptor_cd52456d1c237167 = []byte{
	// 244 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xb1, 0x4e, 0x84, 0x40,
	0x18, 0x84, 0x59, 0xe4, 0x30, 0x6e, 0x61, 0xb1, 0x31, 0x66, 0x73, 0xc5, 0xe6, 0x62, 0x45, 0x23,
	0x5b, 0xd8, 0x5a, 0xdd, 0x23, 0x5c, 0x8c, 0x85, 0x8d, 0x59, 0x60, 0x05, 0xe2, 0x71, 0x3f, 0xf9,
	0xf9, 0x49, 0xb0, 0xf4, 0x0d, 0x7c, 0x2c, 0xcb, 0x2b, 0x2d, 0x0d, 0xbc, 0x88, 0xd9, 0x45, 0xcd,
	0xd1, 0xcd, 0x4c, 0xbe, 0x29, 0x66, 0xf8, 0x7a, 0x6f, 0x0d, 0x1e, 0x3a, 0x32, 0xd8, 0x02, 0x92,
	0xce, 0xf2, 0xea, 0x99, 0x86, 0xb4, 0x45, 0x20, 0x10, 0x09, 0xf5, 0x48, 0x7b, 0x9b, 0x99, 0xee,
	0xd5, 0x52, 0xba, 0x00, 0x97, 0x6e, 0x7d, 0x55, 0x42, 0x09, 0xbe, 0xa4, 0x9d, 0x9a, 0xfb, 0x37,
	0xef, 0x8c, 0xaf, 0xb6, 0x79, 0xf5, 0x30, 0x08, 0xc9, 0xcf, 0x73, 0xb4, 0x86, 0x00, 0x25, 0xdb,
	0xb0, 0xe4, 0x62, 0xf7, 0x67, 0xc5, 0x25, 0x0f, 0xeb, 0x42, 0x86, 0x1b, 0x96, 0x44, 0xbb, 0xb0,
	0x2e, 0x84, 0xe0, 0x11, 0x0d, 0x75, 0x21, 0xcf, 0x3c, 0xe6, 0xb5, 0x63, 0x08, 0x64, 0xe4, 0x93,
	0x90, 0xc0, 0x31, 0x2f, 0x08, 0x8d, 0x5c, 0xcd, 0x8c, 0xd3, 0xe2, 0x9a, 0xc7, 0xa6, 0x81, 0xfe,
	0x40, 0x32, 0xf6, 0xe9, 0xaf, 0xdb, 0x3e, 0x7e, 0x8e, 0x8a, 0x1d, 0x47, 0xc5, 0xbe, 0x47, 0xc5,
	0x3e, 0x26, 0x15, 0x1c, 0x27, 0x15, 0x7c, 0x4d, 0x2a, 0x78, 0xba, 0x2f, 0x6b, 0xaa, 0xfa, 0x2c,
	0xcd, 0xa1, 0xd1, 0xa7, 0x43, 0xb5, 0x9f, 0x76, 0xfb, 0x7f, 0xc9, 0xa0, 0x97, 0x17, 0xd1, 0x5b,
	0x6b, 0xbb, 0x2c, 0xf6, 0x13, 0xef, 0x7e, 0x02, 0x00, 0x00, 0xff, 0xff, 0x51, 0xe0, 0x02, 0x2d,
	0x40, 0x01, 0x00, 0x00,
}

func (m *BchTx) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *BchTx) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *BchTx) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintBchTx(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.From) > 0 {
		i -= len(m.From)
		copy(dAtA[i:], m.From)
		i = encodeVarintBchTx(dAtA, i, uint64(len(m.From)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.To) > 0 {
		i -= len(m.To)
		copy(dAtA[i:], m.To)
		i = encodeVarintBchTx(dAtA, i, uint64(len(m.To)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Txid) > 0 {
		i -= len(m.Txid)
		copy(dAtA[i:], m.Txid)
		i = encodeVarintBchTx(dAtA, i, uint64(len(m.Txid)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintBchTx(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintBchTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintBchTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovBchTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *BchTx) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovBchTx(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovBchTx(uint64(m.Id))
	}
	l = len(m.Txid)
	if l > 0 {
		n += 1 + l + sovBchTx(uint64(l))
	}
	l = len(m.To)
	if l > 0 {
		n += 1 + l + sovBchTx(uint64(l))
	}
	l = len(m.From)
	if l > 0 {
		n += 1 + l + sovBchTx(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovBchTx(uint64(l))
	}
	return n
}

func sovBchTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozBchTx(x uint64) (n int) {
	return sovBchTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *BchTx) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBchTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: BchTx: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: BchTx: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBchTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBchTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBchTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBchTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Txid", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBchTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBchTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBchTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Txid = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field To", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBchTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBchTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBchTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.To = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field From", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBchTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBchTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBchTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.From = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBchTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBchTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBchTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBchTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBchTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipBchTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBchTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBchTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBchTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthBchTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupBchTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthBchTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthBchTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBchTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupBchTx = fmt.Errorf("proto: unexpected end of group")
)